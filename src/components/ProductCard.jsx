import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {

  {/* {"id":"MLA1418602801","title":"Camiseta Remera Boca Juniors Titular 2024 Cabj Nueva Cavani","condition":"new","thumbnail_id":"826017-MLA75554447555_042024",
			"catalog_product_id":null,"listing_type_id":"gold_special","permalink":"https://articulo.mercadolibre.com.ar/MLA-1418602801-camiseta-remera-boca-juniors-titular-2024-cabj-nueva-cavani-_JM","buying_mode":"buy_it_now","site_id":"MLA","category_id":"MLA1286","domain_id":"MLA-FOOTBALL_SHIRTS",
			"thumbnail":"http://http2.mlstatic.com/D_826017-MLA75554447555_042024-I.jpg","currency_id":"ARS","order_backend":1,"price":18049.05,"original_price":18999,"sale_price":null,"available_quantity":250,"official_store_id":null,"use_thumbnail_id":true,"accepts_mercadopago":true,"variation_filters":["COLOR","PLAYER","SIZE"],"shipping":{"store_pick_up":false,"free_shipping":false,"logistic_type":"xd_drop_off","mode":"me2","tags":[],"benefits":null,"promise":null,"shipping_score":-1},"stop_time":"2044-03-26T04:00:00.000Z","seller":{"id":1339413864,"nickname":"MUNDOFUTBOL_IND"},"attributes":[{"id":"AGE_GROUP","name":"Edad","value_id":"6725189","value_name":"Adultos","attribute_group_id":"OTHERS","attribute_group_name":"Otros","value_struct":null,"values":[{"id":"6725189","name":"Adultos","struct":null,"source":2579503448603610}],"source":2579503448603610,"value_type":"list"},{"id":"BRAND","name":"Marca","value_id":"35067160","value_name":"Genérica","attribute_group_id":"OTHERS","attribute_group_name":"Otros","value_struct":null,"values":[{"id":"35067160","name":"Genérica","struct":null,"source":6402814585011704}],"source":6402814585011704,"value_type":"string"},{"id":"FILTRABLE_GENDER","name":"Género filtrables","value_id":null,"value_name":"Hombre,Mujer","attribute_group_id":"OTHERS","attribute_group_name":"Otros","value_struct":null,"values":[{"id":"18549360","name":"Hombre","struct":null,"source":2579503448603610},{"id":"18549361","name":"Mujer","struct":null,"source":2579503448603610}],"source":2579503448603610,"value_type":"list"},{"id":"GENDER","name":"Género","value_id":"110461","value_name":"Sin género","attribute_group_id":"OTHERS","attribute_group_name":"Otros","value_struct":null,"values":[{"id":"110461","name":"Sin género","struct":null,"source":6402814585011704}],"source":6402814585011704,"value_type":"list"},{"id":"IS_EMERGING_BRAND","name":"Es marca emergente","value_id":"242084","value_name":"No","attribute_group_id":"OTHERS","attribute_group_name":"Otros","value_struct":null,"values":[{"id":"242084","name":"No","struct":null,"source":2579503448603610}],"source":2579503448603610,"value_type":"boolean"},{"id":"IS_HIGHLIGHT_BRAND","name":"Es marca destacada","value_id":"242084","value_name":"No","attribute_group_id":"OTHERS","attribute_group_name":"Otros","value_struct":null,"values":[{"id":"242084","name":"No","struct":null,"source":2579503448603610}],"source":2579503448603610,"value_type":"boolean"},{"id":"IS_TOM_BRAND","name":"Es marca TOM","value_id":"242084","value_name":"No","attribute_group_id":"OTHERS","attribute_group_name":"Otros","value_struct":null,"values":[{"id":"242084","name":"No","struct":null,"source":2579503448603610}],"source":2579503448603610,"value_type":"boolean"},{"id":"ITEM_CONDITION","name":"Condición del ítem","value_id":"2230284","value_name":"Nuevo","attribute_group_id":"OTHERS","attribute_group_name":"Otros","value_struct":null,"values":[{"id":"2230284","name":"Nuevo","struct":null,"source":6402814585011704}],"source":6402814585011704,"value_type":"list"}],"variations_data":{"182342372977":{"thumbnail":"http://http2.mlstatic.com/D_975477-MLA75404080494_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU352018706","attributes":[]},"182342372981":{"thumbnail":"http://http2.mlstatic.com/D_975477-MLA75404080494_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU350585115","attributes":[]},"182342372987":{"thumbnail":"http://http2.mlstatic.com/D_975477-MLA75404080494_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU352018714","attributes":[]},"180210405034":{"thumbnail":"http://http2.mlstatic.com/D_806745-MLA75399986346_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU349281993","attributes":[]},"180210405040":{"thumbnail":"http://http2.mlstatic.com/D_806745-MLA75399986346_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU349281999","attributes":[]},"180210405052":{"thumbnail":"http://http2.mlstatic.com/D_826017-MLA75554447555_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU349282005","attributes":[]},"182342372983":{"thumbnail":"http://http2.mlstatic.com/D_736494-MLA75403962340_042024-O.jpg","ratio":"1.04","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU352018710","attributes":[]},"182342372985":{"thumbnail":"http://http2.mlstatic.com/D_975477-MLA75404080494_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU352018712","attributes":[]},"180210405042":{"thumbnail":"http://http2.mlstatic.com/D_806745-MLA75399986346_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU349279671","attributes":[]},"180210405044":{"thumbnail":"http://http2.mlstatic.com/D_826017-MLA75554447555_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU349282001","attributes":[]},"180210405050":{"thumbnail":"http://http2.mlstatic.com/D_826017-MLA75554447555_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU349282003","attributes":[]},"182342372991":{"thumbnail":"http://http2.mlstatic.com/D_736494-MLA75403962340_042024-O.jpg","ratio":"1.04","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU350583495","attributes":[]},"180210405048":{"thumbnail":"http://http2.mlstatic.com/D_826017-MLA75554447555_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU349279675","attributes":[]},"180210405046":{"thumbnail":"http://http2.mlstatic.com/D_826017-MLA75554447555_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU349279673","attributes":[]},"182342372979":{"thumbnail":"http://http2.mlstatic.com/D_736494-MLA75403962340_042024-O.jpg","ratio":"1.04","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU352018708","attributes":[]},"182342372993":{"thumbnail":"http://http2.mlstatic.com/D_736494-MLA75403962340_042024-O.jpg","ratio":"1.04","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU350585121","attributes":[]},"182342372995":{"thumbnail":"http://http2.mlstatic.com/D_736494-MLA75403962340_042024-O.jpg","ratio":"1.04","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU352018718","attributes":[]},"180210405036":{"thumbnail":"http://http2.mlstatic.com/D_806745-MLA75399986346_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU349281995","attributes":[]},"180210405038":{"thumbnail":"http://http2.mlstatic.com/D_806745-MLA75399986346_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU349281997","attributes":[]},"182342372989":{"thumbnail":"http://http2.mlstatic.com/D_975477-MLA75404080494_042024-O.jpg","ratio":"0.78","name":"Azul","pictures_qty":3,"price":18049.05,"user_product_id":"MLAU350585117","attributes":[]}},"installments":{"quantity":6,"amount":3980.12,"rate":32.31,"currency_id":"ARS"},
			"winner_item_id":null,"catalog_listing":false,"discounts":null,"promotions":[],"inventory_id":null}, */}
  return (
      <Link to={`/product/${product.id}`}>
        <div className="m-3 w-[250px] min-w-[250px] max-w-[250px] h-[350px] max-h-[350px] hover:text-[#3483FA] bg-white border border-gray-200 rounded-lg shadow-xs hover:shadow-2xl transition-shadow duration-500">
          <div className="flex justify-center mt-5 ">
            <img className="rounded-t-lg h-[150px] w-auto" src={product.thumbnail} alt={'imagen de ' + product.title.slice(0, 10) + '...'} />
          </div>
          <div className="p-5 text-justify">
            <p className="mb-2 text-sm font-light">{product.title.length > 50 ? product.title.slice(0, 50) + '...' : product.title}</p>
            {product.original_price ? <div className="flex"><p className="text-gray-500 line-through">${product.original_price.toLocaleString('es-AR')}</p><p className="text-[#31B771] ml-2 my-auto items-center rounded text-xs">DESCUENTO</p></div> : ''}
            <p className="mb-3 text-black text-2xl ">${product.price.toLocaleString('es-AR')}</p>
            {product.shipping.free_shipping ? <p className="text-[#31B771] font-semibold text-sm ">Envío gratis</p> : ''}
          </div>
        </div>
      </Link>
  )
}

export default ProductCard