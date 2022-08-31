import {AllProducts} from './js/filter.js'

// console.log('testing...',AllProducts[0].category.name)


let data = {
    CategoryNames : [],
    kyckling : [],
    kött : [],
    fisk : [],
    vegataris : [],
    efterrätt : []

}

// loop  
//  includes   true or false 
// products length == 24 
for(let x = 0 ; x < AllProducts.length ; x ++ ){


    if(!data.CategoryNames.includes(AllProducts[x].category.name)){

        data = {
            ...data,
            CategoryNames : [
                ...data.CategoryNames,
                AllProducts[x].category.name
            ]
        }
    }
 
    
    if(AllProducts[x].category.name === 'kyckling'){

        data  = {
            ...data,
            kyckling : [
                ...data.kyckling,
                AllProducts[x]
            ]
        }
    }
    if(AllProducts[x].category.name === 'kött'){

        data  = {
            ...data,
            kött : [
                ...data.kött,
                AllProducts[x]
            ]
        }
    }
    if(AllProducts[x].category.name === 'fisk'){

        data  = {
            ...data,
            fisk : [
                ...data.fisk,
                AllProducts[x]
            ]
        }
    }
    if(AllProducts[x].category.name === 'vegataris'){

        data  = {
            ...data,
            vegataris : [
                ...data.vegataris,
                AllProducts[x]
            ]
        }
    }

    if(AllProducts[x].category.name === 'efterrätt'){

        data  = {
            ...data,
            efterrätt : [
                ...data.efterrätt,
                AllProducts[x]
            ]
        }
    }
 
}





let Alldata = {
    kyckling : [],
    kött : [],
    fisk : [],
    vegataris : [],
    efterrätt : []
}


 // 2  run 5 
 // chlidren 10 
for(let box = 0 ; box < 5; box ++){


     // 0

    // run 0  kyckling loop 10 
    // box 1 fisk l loop 10
    
    for(let i = 0 ; i < Number(10)  ; i ++){

        // kyckling
       
        if(box === Number(0)){
            let therandom = Math.floor(Math.random() * data.kyckling.length)
   
            if(!Alldata.kyckling.includes(data.kyckling[therandom]))
            {
       
               Alldata = {
                   ...Alldata,
                   kyckling : [
                       ...Alldata.kyckling,
                       data.kyckling[therandom]
                   ]
               }
       
            }
        }
   
        // fisk
        if(box === Number(1)){
            let therandom = Math.floor(Math.random() * data.fisk.length)
   
            if(!Alldata.fisk.includes(data.fisk[therandom]))
            {
       
               Alldata = {
                   ...Alldata,
                   fisk : [
                       ...Alldata.fisk,
                       data.fisk[therandom]
                   ]
               }
       
            }
        }
   
        // vegataris
        if(box === Number(2)){
            let therandom = Math.floor(Math.random() * data.vegataris.length)
   
            if(!Alldata.vegataris.includes(data.vegataris[therandom]))
            {
       
               Alldata = {
                   ...Alldata,
                   vegataris : [
                       ...Alldata.vegataris,
                       data.vegataris[therandom]
                   ]
               }
       
            }
        }

         // kött
        if(box === Number(3)){
            let therandom = Math.floor(Math.random() * data.kött.length)
   
            if(!Alldata.kött.includes(data.kött[therandom]))
            {
       
               Alldata = {
                   ...Alldata,
                   kött : [
                       ...Alldata.kött,
                       data.kött[therandom]
                   ]
               }
       
            }
        }

        // efterrätt
        if(box === Number(3)){
            let therandom = Math.floor(Math.random() * data.efterrätt.length)
   
            if(!Alldata.efterrätt.includes(data.efterrätt[therandom]))
            {
       
               Alldata = {
                   ...Alldata,
                   efterrätt : [
                       ...Alldata.efterrätt,
                       data.efterrätt[therandom]
                   ]
               }
       
            }
        }
   }

}



console.log('const showdata =', Alldata)



// const showdata = {
//     kyckling: [
//       {
//         _id: '63087afb196ab3bd82efb190',
//         user: '62f502c2847120e6076d7e30',
//         name: 'kyckling',
//         countInStock: 0,
//         image: 'https://shared.cdn.smp.schibsted.com/v2/images/815186f2-06a6-48c9-ad40-22c75d922e53?fit=crop&h=744&w=1200&s=7a7a684feb6a629006a98f5811ec02dabb64d697',
//         prices: 33,
//         description: "These easy (and crazy delicious) steak recipes will satisfy even the hungriest carnivore. From classics like Chicken Fried Steak and Philly Cheesesteaks to decadent dishes like Cajun Butter Steak, we've got it all. Still can't get enough? Try our healthy steak options and best-ever grilled steak dinners, or use up your leftovers in an amazing",
//         popular: false,
//         category: [Object],
//         numReviews: 0,
//         rating: 0,
//         foodsorting: 'lunch',
//         comment: [],
//         createdAt: '2022-08-26T07:49:15.645Z',
//         updatedAt: '2022-08-26T07:49:15.645Z',
//         __v: 0
//       },
//       {
//         numReviews: 0,
//         rating: 0,
//         _id: '62f61f288c4fd0c0f19f8d83',
//         user: '62f502c2847120e6076d7e30',
//         name: 'kyckling',
//         countInStock: 0,
//         image: 'https://cdn-rdb.arla.com/Files/arla-se/2142747018/c1b1440c-2e37-48d1-8c33-297f81446461.jpg?w=1269&h=715&mode=crop&ak=f525e733&hm=b762ca1a',
//         prices: 120,
//         description: '(dairy-free mozzarella is surprisingly easy to find these days). But vegetables and pepperoni are totally allowed for topping',
//         popular: false,
//         category: [Object],
//         createdAt: '2022-08-12T09:36:40.740Z',
//         updatedAt: '2022-08-13T19:20:06.585Z',
//         __v: 0,
//         foodsorting: 'lunch',
//         comment: []
//       },
//       {
//         _id: '62f61ef08c4fd0c0f19f8d7f',
//         user: '62f502c2847120e6076d7e30',
//         name: 'kyckling',
//         countInStock: 0,
//         image: 'https://www.zeta.nu/app/uploads/auto-cropped/2016/04/Pasta_Pappardelle_med_j%C3%A4garens_kyckling_st.jpg',
//         prices: 33,
//         description: '(dairy-free mozzarella is surprisingly easy to find these days). But vegetables and pepperoni are totally allowed for topping',
//         popular: false,
//         category: [Object],
//         createdAt: '2022-08-12T09:35:44.196Z',
//         updatedAt: '2022-08-19T07:50:58.983Z',
//         __v: 1,
//         foodsorting: 'lunch',
//         comment: [Array],
//         numReviews: 1,
//         rating: 3
//       },
//       {
//         _id: '63087a91196ab3bd82efb184',
//         user: '62f502c2847120e6076d7e30',
//         name: 'kyckling',
//         countInStock: 0,
//         image: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_183868/cf_259/honungsstekt_kyckling_med_coleslaw.jpg',
//         prices: 100,
//         description: "These easy (and crazy delicious) steak recipes will satisfy even the hungriest carnivore. From classics like Chicken Fried Steak and Philly Cheesesteaks to decadent dishes like Cajun Butter Steak, we've got it all. Still can't get enough? Try our healthy steak options and best-ever grilled steak dinners, or use up your leftovers in an amazing",
//         popular: false,
//         category: [Object],
//         numReviews: 0,
//         rating: 0,
//         foodsorting: 'lunch',
//         comment: [],
//         createdAt: '2022-08-26T07:47:29.356Z',
//         updatedAt: '2022-08-26T07:47:29.356Z',
//         __v: 0
//       },
//       {
//         _id: '63087b1d196ab3bd82efb194',
//         user: '62f502c2847120e6076d7e30',
//         name: 'kyckling',
//         countInStock: 0,
//         image: 'https://www.kikkoman.se/fileadmin/_processed_/8/d/csm_WEB_Poke_Bowl_with_Crispy_Chicken_762eab7ab4.jpg',
//         prices: 56,
//         description: "These easy (and crazy delicious) steak recipes will satisfy even the hungriest carnivore. From classics like Chicken Fried Steak and Philly Cheesesteaks to decadent dishes like Cajun Butter Steak, we've got it all. Still can't get enough? Try our healthy steak options and best-ever grilled steak dinners, or use up your leftovers in an amazing",
//         popular: false,
//         category: [Object],
//         numReviews: 0,
//         rating: 0,
//         foodsorting: 'lunch',
//         comment: [],
//         createdAt: '2022-08-26T07:49:49.127Z',
//         updatedAt: '2022-08-26T07:49:49.127Z',
//         __v: 0
//       },
//       {
//         _id: '62f61eab8c4fd0c0f19f8d7b',
//         user: '62f502c2847120e6076d7e30',
//         name: 'kyckling',
//         countInStock: 0,
//         image: 'https://static.mathem.se/shared/images/recipes/doublelarge/harissarostad-kyckling-foto-nurlan-mathem.jpeg',
//         prices: 33,
//         description: '(dairy-free mozzarella is surprisingly easy to find these days). But vegetables and pepperoni are totally allowed for topping',
//         popular: false,
//         category: [Object],
//         createdAt: '2022-08-12T09:34:35.060Z',
//         updatedAt: '2022-08-19T07:47:45.021Z',
//         __v: 1,
//         foodsorting: 'lunch',
//         comment: [Array],
//         numReviews: 1,
//         rating: 3
//       }
//     ],
//     'kött': [
//       {
//         _id: '62f7ecb8641603058cf26dde',
//         user: '62f502c2847120e6076d7e30',
//         name: 'sallad',
//         countInStock: 0,
//         image: 'https://d2v9mhsiek5lbq.cloudfront.net/eyJidWNrZXQiOiJsb21hLW1lZGlhLXVrIiwia2V5IjoiZm9vZG5ldHdvcmstaW1hZ2UtMzM5N2I3NTMtNTI3Yi00ZGMzLTk4N2MtNmE4NDdmNzAwNDQ2LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjo3NTAsImhlaWdodCI6NDIyfSwianBlZyI6eyJxdWFsaXR5Ijo1NSwicHJvZ3Jlc3NpdmUiOnRydWV9fX0=',
//         prices: 30,
//         description: "These easy (and crazy delicious) steak recipes will satisfy even the hungriest carnivore. From classics like Chicken Fried Steak and Philly Cheesesteaks to decadent dishes like Cajun Butter Steak, we've got it all. Still can't get enough? Try our healthy steak options and best-ever grilled steak dinners, or use up your leftovers in an amazing",
//         popular: false,
//         category: [Object],
//         numReviews: 0,
//         rating: 0,
//         foodsorting: 'middag',
//         comment: [],
//         createdAt: '2022-08-13T18:26:00.823Z',
//         updatedAt: '2022-08-13T18:26:00.823Z',
//         __v: 0
//       },
//       {
//         numReviews: 0,
//         rating: 0,
//         _id: '62f61f4a8c4fd0c0f19f8d87',
//         user: '62f502c2847120e6076d7e30',
//         name: 'kött',
//         countInStock: 0,
//         image: 'https://static.cdn-expressen.se/images/84/76/847656dbcc214ef984b3279662c4a340/16x9/1000@60.jpg',
//         prices: 100,
//         description: '(dairy-free mozzarella is surprisingly easy to find these days). But vegetables and pepperoni are totally allowed for topping',
//         popular: false,
//         category: [Object],
//         createdAt: '2022-08-12T09:37:14.466Z',
//         updatedAt: '2022-08-13T19:23:28.953Z',
//         __v: 0,
//         foodsorting: 'kött',
//         comment: []
//       },
//       {
//         _id: '62f7ebfa641603058cf26dda',
//         user: '62f502c2847120e6076d7e30',
//         name: 'sallad',
//         countInStock: 0,
//         image: 'https://www.wholesomeyum.com/wp-content/uploads/2020/06/wholesomeyum-Chef-Salad-Recipe-10.jpg',
//         prices: 30,
//         description: "These easy (and crazy delicious) steak recipes will satisfy even the hungriest carnivore. From classics like Chicken Fried Steak and Philly Cheesesteaks to decadent dishes like Cajun Butter Steak, we've got it all. Still can't get enough? Try our healthy steak options and best-ever grilled steak dinners, or use up your leftovers in an amazing",
//         popular: false,
//         category: [Object],
//         numReviews: 0,
//         rating: 0,
//         foodsorting: 'middag',
//         comment: [],
//         createdAt: '2022-08-13T18:22:50.731Z',
//         updatedAt: '2022-08-13T18:22:50.731Z',
//         __v: 0
//       },
//       {
//         _id: '62f6204e8c4fd0c0f19f8d9c',
//         user: '62f502c2847120e6076d7e30',
//         name: 'kött',
//         countInStock: 0,
//         image: 'https://www.obsid.se/wp-content/uploads/2018/04/fordelar-med-svenskt-kott.jpg',
//         prices: 100,
//         description: '(dairy-free mozzarella is surprisingly easy to find these days). But vegetables and pepperoni are totally allowed for topping',
//         popular: false,
//         category: [Object],
//         createdAt: '2022-08-12T09:41:34.568Z',
//         updatedAt: '2022-08-13T19:26:16.298Z',
//         __v: 2,
//         comment: [Array],
//         numReviews: 2,
//         rating: 3.5,
//         foodsorting: 'lunch'
//       },
//       {
//         _id: '62f61f668c4fd0c0f19f8d8b',
//         user: '62f502c2847120e6076d7e30',
//         name: 'kött',
//         countInStock: 0,
//         image: 'https://static.cdn-expressen.se/images/84/76/847656dbcc214ef984b3279662c4a340/16x9/1000@60.jpg',
//         prices: 100,
//         description: '(dairy-free mozzarella is surprisingly easy to find these days). But vegetables and pepperoni are totally allowed for topping',
//         popular: false,
//         category: [Object],
//         createdAt: '2022-08-12T09:37:42.444Z',
//         updatedAt: '2022-08-20T12:12:36.078Z',
//         __v: 1,
//         foodsorting: 'kött',
//         comment: [Array],
//         numReviews: 1,
//         rating: 5
//       },
//       {
//         _id: '62f6207d8c4fd0c0f19f8da0',
//         user: '62f502c2847120e6076d7e30',
//         name: 'kött',
//         countInStock: 0,
//         image: 'https://images.deliveryhero.io/image/fd-op/LH/eyqq-hero.jpg?width=2000&height=500&quality=45',
//         prices: 100,
//         description: '(dairy-free mozzarella is surprisingly easy to find these days). But vegetables and pepperoni are totally allowed for topping',
//         popular: false,
//         category: [Object],
//         createdAt: '2022-08-12T09:42:21.713Z',
//         updatedAt: '2022-08-19T12:39:19.912Z',
//         __v: 1,
//         foodsorting: 'lunch',
//         comment: [Array],
//         numReviews: 1,
//         rating: 5
//       },
//       {
//         _id: '62f620b08c4fd0c0f19f8da4',
//         user: '62f502c2847120e6076d7e30',
//         name: 'kött',
//         countInStock: 0,
//         image: 'https://imageio.forbes.com/specials-images/imageserve/601063988/960x0.jpg?format=jpg&width=960',
//         prices: 100,
//         description: '(dairy-free mozzarella is surprisingly easy to find these days). But vegetables and pepperoni are totally allowed for topping',
//         popular: false,
//         category: [Object],
//         createdAt: '2022-08-12T09:43:12.375Z',
//         updatedAt: '2022-08-19T12:40:28.431Z',
//         __v: 1,
//         foodsorting: 'lunch',
//         comment: [Array],
//         numReviews: 1,
//         rating: 5
//       },
//       {
//         _id: '62f621748c4fd0c0f19f8daf',
//         user: '62f502c2847120e6076d7e30',
//         name: 'kött',
//         countInStock: 0,
//         image: 'https://embed.widencdn.net/img/beef/hmla7wxlvl/1440x1080px/Beef_Lifestyle_190716_0868.tif?keep=c&u=7fueml',
//         prices: 100,
//         description: "These easy (and crazy delicious) steak recipes will satisfy even the hungriest carnivore. From classics like Chicken Fried Steak and Philly Cheesesteaks to decadent dishes like Cajun Butter Steak, we've got it all. Still can't get enough? Try our healthy steak options and best-ever grilled steak dinners, or use up your leftovers in an amazing",
//         popular: false,
//         category: [Object],
//         createdAt: '2022-08-12T09:46:28.164Z',
//         updatedAt: '2022-08-19T12:40:56.726Z',
//         __v: 1,
//         foodsorting: 'middag',
//         comment: [Array],
//         numReviews: 1,
//         rating: 5
//       }
//     ],
//     fisk: [
//       {
//         _id: '62f7ece8641603058cf26de6',
//         user: '62f502c2847120e6076d7e30',
//         name: 'fisk',
//         countInStock: 0,
//         image: 'https://images.staticjw.com/foo/3440/fisk.jpg',
//         prices: 100,
//         description: "These easy (and crazy delicious) steak recipes will satisfy even the hungriest carnivore. From classics like Chicken Fried Steak and Philly Cheesesteaks to decadent dishes like Cajun Butter Steak, we've got it all. Still can't get enough? Try our healthy steak options and best-ever grilled steak dinners, or use up your leftovers in an amazing",
//         popular: false,
//         category: [Object],
//         numReviews: 1,
//         rating: 5,
//         foodsorting: 'middag',
//         comment: [Array],
//         createdAt: '2022-08-13T18:26:48.104Z',
//         updatedAt: '2022-08-19T14:47:13.637Z',
//         __v: 1
//       }
//     ],
//     vegataris: [
//       {
//         _id: '63087b5b196ab3bd82efb198',
//         user: '62f502c2847120e6076d7e30',
//         name: 'vegataris',
//         countInStock: 0,
//         image: 'https://static.mathem.se/shared/images/recipes/doublelarge/sticky-tofu-med-limeris.jpeg',
//         prices: 32,
//         description: "These easy (and crazy delicious) steak recipes will satisfy even the hungriest carnivore. From classics like Chicken Fried Steak and Philly Cheesesteaks to decadent dishes like Cajun Butter Steak, we've got it all. Still can't get enough? Try our healthy steak options and best-ever grilled steak dinners, or use up your leftovers in an amazing",
//         popular: false,
//         category: [Object],
//         numReviews: 0,
//         rating: 0,
//         foodsorting: 'lunch',
//         comment: [],
//         createdAt: '2022-08-26T07:50:51.541Z',
//         updatedAt: '2022-08-26T07:50:51.541Z',
//         __v: 0
//       },
//       {
//         _id: '63087b85196ab3bd82efb19c',
//         user: '62f502c2847120e6076d7e30',
//         name: 'vegataris',
//         countInStock: 0,
//         image: 'https://static.mathem.se/shared/images/recipes/doublelarge/chili-sin-carne-foto-nurlan-mathem.jpeg',
//         prices: 76,
//         description: "These easy (and crazy delicious) steak recipes will satisfy even the hungriest carnivore. From classics like Chicken Fried Steak and Philly Cheesesteaks to decadent dishes like Cajun Butter Steak, we've got it all. Still can't get enough? Try our healthy steak options and best-ever grilled steak dinners, or use up your leftovers in an amazing",
//         popular: false,
//         category: [Object],
//         numReviews: 0,
//         rating: 0,
//         foodsorting: 'lunch',
//         comment: [],
//         createdAt: '2022-08-26T07:51:33.567Z',
//         updatedAt: '2022-08-26T07:51:33.567Z',
//         __v: 0
//       }
//     ],
//      // 
//     'efterrätt': [
//       {
//         _id: '6302240bc38a6f75513d521a',
//         user: '62f502c2847120e6076d7e30',
//         name: 'testing',
//         countInStock: 0,
//         image: 'https://www.recepten.se/bilder/recept/293/main/l/vit_chokladmousse_lime_jordgubbar.jpg',
//         prices: 89,
//         description: "These easy (and crazy delicious) steak recipes will satisfy even the hungriest carnivore. From classics like Chicken Fried Steak and Philly Cheesesteaks to decadent dishes like Cajun Butter Steak, we've got it all. Still can't get enough? Try our healthy steak options and best-ever grilled steak dinners, or use up your leftovers in an amazing",
//         popular: false,
//         category: [Object],
//         numReviews: 0,
//         rating: 0,
//         foodsorting: 'efterrätt',
//         comment: [],
//         createdAt: '2022-08-21T12:24:43.423Z',
//         updatedAt: '2022-08-21T12:24:43.423Z',
//         __v: 0
//       },
//       {
//         _id: '630235b3ef9a2d345983a950',
//         user: '62f502c2847120e6076d7e30',
//         name: 'Mahmoud',
//         countInStock: 0,
//         image: 'https://www.recepten.se/bilder/recept/293/main/l/vit_chokladmousse_lime_jordgubbar.jpg',
//         prices: 21,
//         description: "These easy (and crazy delicious) steak recipes will satisfy even the hungriest carnivore. From classics like Chicken Fried Steak and Philly Cheesesteaks to decadent dishes like Cajun Butter Steak, we've got it all. Still can't get enough? Try our healthy steak options and best-ever grilled steak dinners, or use up your leftovers in an amazing",
//         popular: false,
//         category: [Object],
//         numReviews: 1,
//         rating: 5,
//         foodsorting: 'efterrätt',
//         comment: [Array],
//         createdAt: '2022-08-21T13:40:03.268Z',
//         updatedAt: '2022-08-21T19:37:48.009Z',
//         __v: 1
//       }
//     ]
//   }

  
