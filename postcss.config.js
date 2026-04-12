module.exports = {

    plugins: [
        require('postcss-pxtorem')({
            rootValue: 16,
            propList: ['*'],
            selectorBlackList: ['.container', 'allPageCardIgnorRemToPx', 'catalogCategories__cards-goodsIgnorRemToPx', 'contacts__more-detailIgnorPxToRem', 'blog__reviewsIgnorePxToRem'/*, 'apply-filter'*/],
        })
    ]
}