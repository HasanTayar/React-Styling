const data = [
    {
        name: 'Leonardo',
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-b14dr2I8Pvg4_56Y0d2xI4dsVXOhb0x7bQ&usqp=CAU',
        pizzaToppings: [
            {
                id: '1',
                name: 'Pepperoni',
                img:
                    'https://media.istockphoto.com/photos/single-slice-of-pepperoni-meatisolated-on-white-with-path-shot-from-picture-id1153708773?b=1&k=20&m=1153708773&s=170667a&w=0&h=1RvsBX4_XgkrBh2oKNKpdR08mFG5bBz06OkGk7qL4Fo=',
            },
            {
                id: '2',
                name: 'Sausage',
                img:
                    'https://tasteofartisan.com/wp-content/uploads/2022/01/traditional-hungarian-sausage-3.jpg',
            },
        ],
    },
    {
       
        name: 'Donatello',
        img:
            'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Donatello.Teenage-Mutant-Ninja-Turtles.webp',
        pizzaToppings: [
            {
                id: '3',
                name: 'Extra Cheese',
                img:
                    'https://i0.wp.com/pizzavisa.in/wp-content/uploads/2022/02/mozrella-cheese.webp'
                ,
            },
            {
                id: '4',
                name: 'Peppers',
                img:
                    'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2019/08/Bell-Peppers.jpg',
            },
            {
                id: '5',
                name: 'Pesto',
                img:
                    'https://assets.bonappetit.com/photos/5b72f35c7278c24ab618f773/6:9/w_1762,h_2643,c_limit/ba-best-pesto-1.jpg',
            },
        ],
    },
    {
        name: 'Michelangelo',
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeucuHmQ_VDq-WInzBlN5ScNk98Fr0hDh_MA&usqp=CAU',
        pizzaToppings: [
            {
                id: '6',
                name: 'Basil',
                img:
                    'http://cdn.shopify.com/s/files/1/0284/2450/products/BASILCLASSICITALIAN_1024x.jpg?v=1595658733',
            },
            {
                id: '7',
                name: 'Olives',
                img:
                    'https://www.acouplecooks.com/wp-content/uploads/2020/09/Marinated-Olives-003.jpg',
            },
        ],
    },
    {
        name: 'Raphael',
        img:
            'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Raphael.Teenage-Mutant-Ninja-Turtles.webp',
        pizzaToppings: [
            {
                id: '8',
                name: 'Spinach',
                img:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK_nvRPABfNblAB5_Uet2SYhGHFoiLtWLvWuNjd9Xz70HQ1BqpyZ07UD4DADn8M0r7Dg&usqp=CAU',
            },
            {
                id: '9',
                name: 'Pineapple',
                img:
                    'https://i.insider.com/60b00fa702ac410018f9347b?width=1200&format=jpeg',
            },
        ],
    },
]
export default function getData() {
    return (
        data
    ); 
}