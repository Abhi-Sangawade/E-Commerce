export const filters=[
        {
            id:"color",
            name:"Color",
            options:[
                {value:"white", label:"White"},
                {value:"Black", label:"Black"},
                {value:"Maroon", label:"Maroon"},
                {value:"Red", label:"Red"},
                {value:"Gray", label:"Gray"},
                {value:"Green", label:"Green"},
                {value:"Yellow", label:"Yellow"},
            ],
        },

        {
            id:"size",
            name:"Size",
            options:[
                {value:"S", label:"S"},
                {value:"M", label:"M"},
                {value:"L", label:"L"},
                {value:"XL", label:"XL"},
                {value:"XXL", label:"XXL"},
            ],
        },
    ];

       export const singleFilter= [
        {
            id:"price",
            name:"Price",
            options:[
                {value:"159-399", label:"₹159-₹399"},
                {value:"399-999", label:"₹399-₹999"},
                {value:"999-1999", label:"₹999-₹1999"},
                {value:"1999-2999", label:"₹1999-₹2999"},
                {value:"2999-4999", label:"₹2999-₹4999"},
            ],
        },
        {
            id: "discount",
            name:"Discount Range",
            options:[
                {
                    value: "10",
                    label: "10% And Above",
                },
                {value:"20",label:"20% And Above"},
                {value:"30",label:"30% And Above"},
                {value:"40",label:"40% And Above"},
                {value:"50",label:"50% And Above"},
                {value:"60",label:"60% And Above"},
                {value:"70",label:"70% And Above"},
                {value:"80",label:"80% And Above"},
            ],
        },
        {
            id:"stock",
            name:"Availability",
            options:[
                {value:"in_stock",label:"In Stock"},
                {value:"out_of_stock",label:"Out Of Stock"},
            ],
        },
];

export const sortOptions=[
    {name:"Price: Low to High",query:"price_low", current:false},
    {name:"Price: High to Low",query:"price_high", current:false},
];