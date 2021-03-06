import InfoBarData from './infotBarTypes';

interface HeadingType {
    title: string;
    subtitle: string;
}

interface FormInputType {
    label: string;
    placeholder: string;
    inputText?: string;
    inputAlert?: string;
}

interface HTMLFields {
    current: string;
    global: {
        findOutMore: string;
        categories: string;
        contacts: string;
        pricing: string;
        settings: string;
        orders: string;
        help: string;
        products: string;
        submit: string;
    }
    header: {
        homeButton: string;
        languageSwitcherButton: string;
        contactsButton: string;
        loginButton: string;
        logoutButton: string;
        profileButton: string;
        favouritesButton: string;
        cartButton: string;
        noCategories: string;
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
        homegrownHeading: HeadingType;
    }
    footer: {
        usefullLinks: string;
        getConnected: string;
    },
    loginPage: {
        heading: HeadingType;
        dontHaveAccount: string;
        signUpForFree: string;
        rembemberMe: string;
        resetPassword: string;
    }
    registerPage: {
        heading : HeadingType;
        providedDataIsUsedFor: string;
    },
    resetPasswordPage: {
        heading: HeadingType;
        backToLogin: string;
    },
    inputs: {
        email: FormInputType;
        password: FormInputType;
        name: FormInputType;
        address: FormInputType;
        phone: FormInputType;
        city: FormInputType;
        postalCode: FormInputType;
        delivery: FormInputType;
    }
}

export default HTMLFields;
