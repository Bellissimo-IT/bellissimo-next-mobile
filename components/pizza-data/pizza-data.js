import SectionList from "../atoms/section/section";

const products = [
    {
        title: "Пицца",
        data: [
            {
                name: "Чиккен карри", 
                description: "Говяжий рулет и куриное филе в сочетании с сыром моцарелла, ананасами и соусом карри", 
                price: "от 47 000 сум", 
                img: '/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F45bd4064-2430-4250-899d-d6f834d36c30.jpg&w=750&q=75'
            },
            {
                name: "Сырный цыплёнок", 
                description: "Нежное куриное филе, сыр моцарелла, томаты и сырный соус", 
                price: "от 45 000 сум", 
                img: 'https://bellissimo.uz/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F17126e05-7876-45a6-be19-e6d0af0328a4.jpg&w=750&q=75'
            }
        ],
    },
    {
        title: "Закуски",
        data: [
            {
                name: "Картошка фри", 
                // description: "Говяжий рулет и куриное филе в сочетании с сыром моцарелла, ананасами и соусом карри", 
                price: "12 000 сум", 
                img: 'https://bellissimo.uz/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F02b6e2a7-787c-46cb-b5b3-2dfafb6d23e2.jpg&w=750&q=75'
            },
            {
                name: "Картошка по деревенски", 
                // description: "Говяжий рулет и куриное филе в сочетании с сыром моцарелла, ананасами и соусом карри", 
                price: "14 000 сум", 
                img: 'https://bellissimo.uz/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F6a0457e3-5606-4bf1-a8ed-ade0a5dc3485.jpg&w=750&q=75'
            },
            {
                name: "Пепперони роллы 8шт.", 
                description: "Хрустящее тесто, нежный соус ранч, пепперони и много сыра", 
                price: "25 000 сум", 
                img: 'https://bellissimo.uz/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F5aabe16c-ace1-40af-9225-8342ce4533ab.jpg&w=750&q=75'
            },
            {
                name: "Пепперони роллы 4 шт", 
                description: "Хрустящее тесто, нежный соус ранч, колбаса и много сыра", 
                price: "17 000 сум", 
                img: 'https://bellissimo.uz/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F14239b62-96b8-4396-bbe0-8ebd7e1c63fc.jpg&w=750&q=75'
            }
        ],
    },
    {
        title: "Соусы",
        data: [
            {
                name: "Картошка фри", 
                // description: "Говяжий рулет и куриное филе в сочетании с сыром моцарелла, ананасами и соусом карри", 
                price: "12 000 сум", 
                img: 'https://bellissimo.uz/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F02b6e2a7-787c-46cb-b5b3-2dfafb6d23e2.jpg&w=750&q=75'
            },
            {
                name: "Картошка по деревенски", 
                // description: "Говяжий рулет и куриное филе в сочетании с сыром моцарелла, ананасами и соусом карри", 
                price: "14 000 сум", 
                img: 'https://bellissimo.uz/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F6a0457e3-5606-4bf1-a8ed-ade0a5dc3485.jpg&w=750&q=75'
            },
            {
                name: "Пепперони роллы 8шт.", 
                description: "Хрустящее тесто, нежный соус ранч, пепперони и много сыра", 
                price: "25 000 сум", 
                img: 'https://bellissimo.uz/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F5aabe16c-ace1-40af-9225-8342ce4533ab.jpg&w=750&q=75'
            },
            {
                name: "Пепперони роллы 4 шт", 
                description: "Хрустящее тесто, нежный соус ранч, колбаса и много сыра", 
                price: "17 000 сум", 
                img: 'https://bellissimo.uz/_next/image?url=https%3A%2F%2Fqa.bellissimo.uz%2Fstorage%2Fphotos%2F14239b62-96b8-4396-bbe0-8ebd7e1c63fc.jpg&w=750&q=75'
            }
        ],
    }
]

function PizzaMain() {
    return (
        <SectionList products={products} />
    );
}


export default PizzaMain