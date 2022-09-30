
                                        /*  JSON data */

export const socialIcons = [
    {
      id:1,
      icon:'facebook',
      color:'#3a5890',
      tooltip: 'Share on facebook',
      link:'http://facebook.com'
    },
    {
      id:2,
      icon:'twitter',
      color:'#989898 ',
      tooltip: 'tweet on twitter',
      link:'http://twitter.com'
    },
    {
      id:3,
      icon:'github',
      color:'#3a5890',
      tooltip: 'github',
      link:'http://github.com'
    },
  ]
  
   
  export const products = {
      breadcrump:[
        {
            text:'Home',
            link:'https://google.com?q=home'
        },
        {
            text:'Shop',
            link:'https://google.com?q=shop'
        },
        {
            text:'Men',
            link:'https://google.com?q=men'
        },
        {
            text:'T-shirts',
            link:'https://google.com?q=tshirts'
        },
      ],
      title:'Osaka Entry Tee Superdry',
      prices:{
       sale: 29.00,
        regular:39.00
      },
 
      summary:'I love BD I love BD I love BD  I love BDI love BD I love BDI love BD',
  
      category:[
        {
            text:'Men',
            link:'#'
        },
        {
            text:'T-shirt',
            link:'#'
        }
      ],

      tags:[
        {
            text:'Men',
            link:'#'
        },
        {
            text:'T-shirt',
            link:'#'
        }
      ],

      share: socialIcons,

      images:[
         {
            thumb:'thumb-url',
            original:'original-url',
            alt:'alt-text',
            featured:true  
         },
         {
            thumb:'thumb-url',
            original:'original-url',
            alt:'alt-text',
            featured: false
         },
      ],
       wishlist: true, 

    };


    // const menus = [
    //     {
    //         id:1,
    //         text:'Home',
    //         link:'#'
    //     },
    //     {
    //         id:2,
    //         text:'shop',
    //         link:'#'
    //     },
    //     {
    //         id:3
    //         text:'product',
    //         link:'#'
    //     },
    //     {
    //         id:4,
    //         text:'T-shirt',
    //         link:'#'
    //     },
       
    // ]

    // const children = [
    //     {
    //         id:1,
    //         children:[{subMEnu: menus.id[2]}, 3]
    //     },
    //     {
    //         id:2,
    //         children:[{subMEnu: menus.id[3]}, 4]
    //     },
    // ] 