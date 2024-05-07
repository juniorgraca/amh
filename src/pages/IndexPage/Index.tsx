import search from "/img/search.svg"
import itb from "/logoeqp/intelbras.png"

import { item } from "../../assets/types/item"


function Index() {
  return (
      <>
    <div className="bg-color bg-red-300 flex text-center justify-around">
       <h1 className="text-center">
      Bem vindo ao almoxarifado helper por Junior Graça
    </h1>
    </div>
    <div>
    <div className="flex w-full" >
    <div className="bg-color justify-center px-4 py-4 w-full bg-slate-500 flex text-center"> <img src={search} alt=""
     width="auto" height="auto" className="max-w-7 max-h-13 w-full" />
     <input type="text" className=" bg-slate-900 px-5 mx-4 w-1/4"placeholder="Barra de pesquisa" /></div>
     </div>
    <section className="flex margin m-8 justify-center ">
    <div className="flex tex-center justify-center m-8 items-center">
    <div className="imgFundo">
    <img src={itb} width="auto" height="auto" alt="img huawei" className="max-w-60 max-h-13 w-full" />
    </div>
    <div className="imgFundo">
    <img src={itb} width="auto" height="auto" alt="img zte" className="max-w-60 max-h-13 w-full"  />
    </div>
    <div className="imgFundo">
    <img src={itb} width="auto" height="auto" alt="img itb" className="max-w-60 max-h-13 w-full"  />
    </div>
    <div className="imgFundo">
    <img src={itb} width="auto" height="auto" alt="img itb" className="max-w-60 max-h-13 w-full"  />
    </div>
    </div>
    </section>
    <section className="grid grid-cols-3 grid-rows-3 gap-0 w-144">
    {item.map((item,index)=>(
      <div className=" grid grid-cols-4 bg-slate-600 w-96 h-80 mx-8 my-8 rounded-lg" key={index}>
        <div className="">
        <img className="" src={item.img} alt="" />
        <p>{item.name}</p>
        <p>{item.mark}</p>
        <p>{item.desc}</p>
        </div>
      </div>
    ))}
    </section>
    </div>
      </>
  )
}

export default Index
