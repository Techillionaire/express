
exports.getAllProduct = (req, res) => {
    res.status(200).json([
        {
            productName: "Iphone 15",
            productPrice: "$1300"
        },
        {
            productName: "Iphone 14",
            productPrice: "$1300"
        },
        {
            productName: "Iphone 13",
            productPrice: "$1300"
        },

    ])
}

exports.getSingleProduct = (req, res) => {
    res.status(200).json({
        productName: "Iphone 12",
        productPrice: "$1300"
    })
}

exports.createProduct = (req, res) => {
    res.status(200).json({
        message: "Product added successsfully"
    })
}

exports.updateProduct = (req, res) => {
    res.status(200).json({
        message: "Product updated successsfully"
    })
}

exports.deleteProduct = (req, res) => {
    res.status(200).json({
        message: "Product removed successsfully"
    })
}