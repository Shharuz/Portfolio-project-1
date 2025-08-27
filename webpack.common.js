const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
//const CompressionPlugin = require("compression-webpack-plugin");

const pages = [
    { chunks: ["aboutUs"], page: '../aboutUs.html', template: './src/aboutUs.html', title: ['О нас'], },
    { chunks: ["account"], page: '../account.html', template: './src/account.html', title: ['Аккаунт'], },
    { chunks: ["article"], page: '../article.html', template: './src/article.html', title: ['Статья'], },
    { chunks: ["blog"], page: '../blog.html', template: './src/blog.html', title: ['Блог'], },
    { chunks: ["card"], page: '../card.html', template: './src/card.html', title: ['Карточка товара'], },
    { chunks: ["catalogCategories"], page: '../catalogCategories.html', template: './src/catalogCategories.html', title: ['Каталог'], },
    { chunks: ["catalogMainPage"], page: '../catalogMainPage.html', template: './src/catalogMainPage.html', title: ['Категории каталога'], },
    { chunks: ["contacts"], page: '../contacts.html', template: './src/contacts.html', title: ['Контакты'], },
    { chunks: ["directory"], page: '../directory.html', template: './src/directory.html', title: ['Справочник'], },
    { chunks: ["forPartners"], page: '../forPartners.html', template: './src/forPartners.html', title: ['Стать дилером'], },
    { chunks: ["howToBuy"], page: '../howToBuy.html', template: './src/howToBuy.html', title: ['Как купить'], },
    {
        chunks: ["index"],
        page: '../index.html',
        template: './src/index.html',
        title: [
            ['Живые Бактерии']
        ],
    },
    { chunks: ["placingAnOrder"], page: '../placingAnOrder.html', template: './src/placingAnOrder.html', title: ['Оформление заказа'], },
    { chunks: ["questions"], page: '../questions.html', template: './src/questions.html', title: ['Вопрос - Ответ'], },
    { chunks: ["reviews"], page: '../reviews.html', template: './src/reviews.html', title: ['Отзывы'], },
];

let fs = require('fs');

const header = fs.readFileSync(__dirname + '/src/header.html');
const modal = fs.readFileSync(__dirname + '/src/modal.html');
const widget = fs.readFileSync(__dirname + '/src/widget.html');
const footer = fs.readFileSync(__dirname + '/src/footer.html');

const htmlPlugins = pages.map(page => {
    return new HtmlWebpackPlugin({
        inject: true,
        template: page.template,
        filename: page.page,
        chunks: [...page.chunks],
        title: [...page.title],
        header: header,
        modal: modal,
        widget: widget,
        footer: footer,
    })
});


module.exports = {

    entry: {
        aboutUs: './src/script/aboutUs.js',
        account: './src/script/account.js',
        article: './src/script/article.js',
        blog: './src/script/blog.js',
        card: './src/script/card.js',
        catalogCategories: './src/script/catalogCategories.js',
        catalogMainPage: './src/script/catalogMainPage.js',
        contacts: './src/script/contacts.js',
        directory: './src/script/directory.js',
        forPartners: './src/script/forPartners.js',
        howToBuy: './src/script/howToBuy.js',
        index: './src/script/index.js',
        placingAnOrder: './src/script/placingAnOrder.js',
        questions: './src/script/questions.js',
        reviews: './src/script/reviews.js',
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './public/js'),
        clean: true,
    },

    plugins: [
        ...htmlPlugins,
        new CopyPlugin({
            patterns: [
                { from: "./src/img", to: "../img" },
                { from: "./src/fonts/product", to: "../fonts" },
                { from: "./src/style/style.min.css", to: "../style" },
            ],
        }),
        /*new CompressionPlugin({
            test: /\.js$|\.html$/,
            algorithm: "gzip",
        }),*/
    ],

    module: {

        rules: [{
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/inline',
        }, ],
    },


};