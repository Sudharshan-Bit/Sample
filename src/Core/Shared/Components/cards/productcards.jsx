

export default function Productcards(props) {
    const {products}=props
    console.log(products)

  return (
    <div className="85rem, w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {products.map((item,index)=>
                    <div className="p-5  border shadow-lg rounded-xl "key={index}>
                    <div className="mt-5 pb-4">
                        <img src={item.images[0]} alt="" className="h-[250px] md:h-[400px] w-full bg-cover" />
                        <h1 className="text-2xl font-bold">{item.title}</h1>
                        <h2 className="mb-3 text-lg  text-red-600">${item.price}</h2>
                        <div className="w-40 h-4 mx-auto">
                        <button className="w-full  text-white bg-slate-600 rounded-2xl">Add Cart</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>

  )
}
