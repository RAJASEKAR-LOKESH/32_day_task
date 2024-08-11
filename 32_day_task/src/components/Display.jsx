import Card from './Card'
const Display=()=>{
    
        const products= [
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple, which is mostly preffered for the security.",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "images": ["https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2020/02/26/Pictures/_d414a686-586e-11ea-8884-f7c338dc7f56.jpg"
        ]},
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip.",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
                "images":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39bK8KsnSJ42uDvlJWdVssgmG_tfsyIIeIQ&s https://univexim.com/2319-large_default/apple-iphone-x-64gb-silver.jpg://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatimes.com%2Ftechnology%2Fnews%2Fapple-iphone-9-spotted-on-chinese-e-commerce-website-may-launch-soon-510328.html&psig=AOvVaw2NeNZvybhUvh48H60mS68w&ust=1723465854053000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCdyLH47IcDFQAAAAAdAAAAABAS"
        ]},
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe.",
                "price": 1249,
                "discountPercentage": 15.46,
                "rating": 4.09,
                "stock": 36,
                "brand": "Samsung",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
                "images": [
                    "https://blogs-images.forbes.com/gordonkelly/files/2018/03/for-renders.7107-Small.jpg"
                ]
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021 which has some terrific camera performance.",
                "price": 280,
                "discountPercentage": 17.91,
                "rating": 4.3,
                "stock": 123,
                "brand": "OPPO",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
                "images": ["https://dms.mydukaan.io/original/jpeg/4448658/430de2be-dd94-4c10-a25b-71a3de1e0f6a/oppo-f19-6gb-prism-black-e3ced522-1388-42b7-a911-9035eb97f53b.jpeg"
                ]
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany.",
                "price": 499,
                "discountPercentage": 10.58,
                "rating": 4.09,
                "stock": 32,
                "brand": "Huawei",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
                "images": ["https://www.91-img.com/gallery_images_uploads/5/1/517b476d8e5444e119950ef4e6508b8b336a430e.jpg?tr=h-271,c-at_max,q-60"
                ]
            }
        ]
    return(
        <div className='app'>
        <div className="display">
        {products.map((element)=><Card id={element.id} title={element.title} description={element.description} price={element.price} images={element.images[0]}/>)}
      
        </div>
        </div>
    )
}
export default Display