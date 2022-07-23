import InfoBarData from './infotBarTypes';

interface HeadingType {
    title: string;
    description: string;
}

interface HTMLFields {
    header: {
        homeButton: string;
        categoriesButton: string;
        languageSwitcherButton: string;
        contactsButton: string;
        loginButton: string;
        logoutButton: string;
        profileButton: string;
        favouritesButton: string;
        cartButton: string;
    },
    searchBar: {
        buttonText: string;
        titleText: string;
        inputfieldPlaceholder: string;
        productNotFound: string;
    }
    mainPage: {
        infoBar: InfoBarData[];
        featuredProductsHeading: HeadingType;
        summerCollectionHeading: HeadingType;
        bestSellersHeading: HeadingType;
    }
}

export default HTMLFields;
