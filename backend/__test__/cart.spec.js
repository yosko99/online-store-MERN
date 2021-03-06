const request = require('supertest');
const mongoose = require('mongoose');

const initializeDummyData = require('./config/initializeDummyData');
const deleteDummyData = require('./config/deleteDummyData');

const app = require('../app');
const Cart = require('../models/cartModel');

describe('Testing cart API', () => {
  let dummyData = {
    notLinkedCart: null,
    linkedCart: null,
    userLinkedWithCart: null,
    userNotLinkedWithCart: null
  };

  beforeAll(async () => {
    dummyData = await initializeDummyData(dummyData);
  });

  afterAll(async () => {
    await deleteDummyData(dummyData);
    mongoose.disconnect();
  });

  test('add product to already created cart with provided valid productID, cartID and product quantity', () => {
    return request(app)
      .post('/api/carts/')
      .send({
        productID: '1',
        cartID: dummyData.notLinkedCart._id,
        productQuantity: 1
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            cartID: dummyData.notLinkedCart._id.toString()
          })
        );
      });
  });

  test('add product to already created cart with provided valid productID, cartID', () => {
    return request(app)
      .post('/api/carts/')
      .send({
        productID: '1',
        cartID: dummyData.notLinkedCart._id
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            cartID: dummyData.notLinkedCart._id.toString()
          })
        );
      });
  });

  test('add product to already created cart with provided valid cartID but no product ID', () => {
    return request(app)
      .post('/api/carts/')
      .send({
        cartID: dummyData.notLinkedCart._id
      })
      .expect('Content-Type', /html/)
      .expect(404)
      .then((response) => {
        expect(response.text).toBe('No product ID provided');
      });
  });

  test('add product to non existant cart with provided valid product ID', () => {
    return request(app)
      .post('/api/carts/')
      .send({
        productID: '1'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then(async (response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            cartID: expect.any(String)
          })

        );
        await Cart.deleteOne({ _id: response.body.cartID });
      });
  });

  test('get cart that is not linked with user, with provided valid ID', () => {
    return request(app)
      .get(`/api/carts/${dummyData.notLinkedCart._id.toString()}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            defaultValues: null,
            products: expect.arrayContaining([
              expect.objectContaining({
                productID: expect.any(String),
                productQuantity: expect.any(Number),
                _id: expect.any(String)
              })
            ])
          })
        );
      });
  });

  test('get cart with invalid cart ID', () => {
    return request(app)
      .get('/api/carts/blabla')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            err: 'Invalid cart ID'
          })
        );
      });
  });

  test('get cart that is linked to user, with provided valid ID', () => {
    return request(app)
      .get(`/api/carts/${dummyData.linkedCart._id.toString()}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            defaultValues: expect.objectContaining({
              phone: dummyData.userLinkedWithCart.phone,
              address: dummyData.userLinkedWithCart.address,
              name: dummyData.userLinkedWithCart.name
            }),
            products: expect.arrayContaining([
              expect.objectContaining({
                productID: expect.any(String),
                productQuantity: expect.any(Number),
                _id: expect.any(String)
              })
            ])
          })
        );
      });
  });

  test('delete product from cart with provided valid product ID and cart ID', () => {
    return request(app)
      .delete('/api/carts/product')
      .send({
        cartID: dummyData.linkedCart._id,
        productID: '7'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.msg).toBe('Product removed');
      });
  });

  test('delete product from cart with provided valid product ID and unvalid cart ID', () => {
    return request(app)
      .delete('/api/carts/product')
      .send({
        cartID: 'blabla',
        productID: '7'
      })
      .expect('Content-Type', /html/)
      .expect(404)
      .then((response) => {
        expect(response.text).toBe('Invalid cart ID');
      });
  });
});
