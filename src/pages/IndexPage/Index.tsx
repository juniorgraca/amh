import huawei from "./../../../public/logoeqp/huawei.png"
import itb from "./../../../public/logoeqp/intelbras.png"
import zte from "./../../../public/logoeqp/zte.png"
import zx from "./../../../public/logoeqp/zyxel.png"
function Index() {
  return (
      <>
    <div className="bg-color bg-red-300 flex text-center justify-around">
       <h1 className="text-center">
      Bem vindo ao almoxarifado helper por Junior Graça
    </h1>
    </div>
    <div>
    <h2 className="bg-color bg-slate-500 flex text-center justify-around">Segunda parte</h2>
    <img src={huawei} alt="" />
    <img src={itb} alt="" />
    <img src={zte} alt="" />
    <img src={zx} alt="" />
    </div>
      </>
  )
}

export default Index
