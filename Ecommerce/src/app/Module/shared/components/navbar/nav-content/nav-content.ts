export const navigation = {
    men: {
        id: 'men',
        name: 'Men',
        featured: [
            {
                name: 'New Arrivals',
                id: '#',
                imageSrc: '',
                imageAlt: '',
            },
            {
                name: 'Artwork Tees',
                id: '#',
                imageSrc: '',
                imageAlt: '',
            },
        ],
        sections: [
            {
                id: 'clothing',
                name: 'Clothing',
                items: [
                    { name: 'Mens Kurta', id: "mens_kurta" },
                    { name: 'Shirt', id: "shirt" },
                    { name: 'Pants', id: 'pants', href: "#" },
                    { name: 'Sweaters', id: 'sweater' },
                    { name: 'T-Shirts', id: "t-shirts" },
                    { name: 'Jackets', id: "jacket" },
                    { name: 'Kurtas', id: "kurta" },
                ],
            },
            {
                id: 'accessories',
                name: 'Accessories',
                items: [
                    { name: 'Watches', id: 'watch' },
                    { name: 'Wallets', id: 'wallet' },
                    { name: 'Bags', id: 'bag' },
                    { name: 'Sunglasses', id: 'sunglasses' },
                    { name: 'Hats', id: 'hats' },
                    { name: 'Belts', id: 'belts' },
                ],
            },
            {
                id: 'brands',
                name: 'Brands',
                items: [
                    { name: 'Full Nelson', id: '#' },
                    { name: 'My Way', id: '#' },
                    { name: 'Re-Arranged', id: '#' },
                    { name: 'Counterfeit', id: '#' },
                    { name: 'Significant Other', id: '#' },
                ],
            },
        ],
    },

    woman: {
        id: 'woman',
        name: 'Woman',
        featured: [
            {
                name: 'New Arrivals',
                id: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
                imageAlt: '',
            },
            {
                name: 'Artwork Tees',
                id: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
                imageAlt: '',
            },
        ],
        sections: [
            {
                id: 'clothing',
                name: 'Clothing',
                items: [
                    { name: 'Tops', id: "top", href: '{woman/clothing/tops}' },
                    { name: 'Dresses', id: "woman_dresses", href: "#" },
                    { name: 'Pants', id: 'woman_jeans', href: "#" },
                    { name: 'Sweaters', id: 'woman_sweater' },
                    { name: 'T-Shirts', id: "t-shirts" },
                    { name: 'Jackets', id: "jacket" },
                    { name: 'Gowns', id: "woman_gowns" },
                    { name: 'Sarees', id: "woman_saree" },
                    { name: 'Kurtas', id: "woman_kurtas" },
                ],
            },
            {
                id: 'accessories',
                name: 'Accessories',
                items: [
                    { name: 'Watches', id: 'watch' },
                    { name: 'Wallets', id: 'wallet' },
                    { name: 'Bags', id: 'bag' },
                    { name: 'Sunglasses', id: 'sunglasses' },
                    { name: 'Hats', id: 'hats' },
                    { name: 'Belts', id: 'belts' },
                ],
            },
            {
                id: 'brands',
                name: 'Brands',
                items: [
                    { name: 'Full Nelson', id: '#' },
                    { name: 'My Way', id: '#' },
                    { name: 'Re-Arranged', id: '#' },
                    { name: 'Counterfeit', id: '#' },
                    { name: 'Significant Other', id: '#' },
                ],
            },
        ],
    },
};
