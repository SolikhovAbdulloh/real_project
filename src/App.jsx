import React from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import katta from "./assets/katta.png";
import img4 from "./assets/img4.svg";

function App() {
  return (
    <div className="container px-4 sm:px-6 md:px-8">
      <div>
        <p className="font-bold text-[24px] sm:text-[32px] text-black">
          Hikmicro - M10 + tekshirish, M10 25Hz -20...550°C (160x120) <br />
          issiqlik tasvirlagichi (Rossiya Federatsiyasi Davlat reestri)
        </p>
        <div className="flex flex-col sm:flex-row mt-6 items-start gap-4 sm:gap-5">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 justify-center items-center">
            <div className="grid grid-cols-3 gap-3 sm:gap-4 sm:grid-cols-1">
              <img
                className="w-[120px] h-[120px] sm:w-[160px] sm:h-[170px] mx-auto"
                src={img1}
                alt="1"
              />
              <img
                className="w-[120px] h-[120px] sm:w-[160px] sm:h-[170px] mx-auto"
                src={img2}
                alt="2"
              />
              <img
                className="w-[120px] h-[120px] sm:w-[160px] sm:h-[170px] mx-auto"
                src={img3}
                alt="3"
              />
            </div>

            <img
              className="w-[80%] sm:w-[90%] h-auto mt-2 mx-auto sm:mt-0"
              src={katta}
              alt="4"
            />
          </div>

          <div className="flex flex-col gap-4 sm:gap-[20px] justify-between">
            <p className="text-[14px] sm:text-[16px] text-[red]">
              Sotuvda: 50 dona
            </p>
            <p className="font-bold text-[20px] sm:text-[24px]">93 000 sum</p>
            <p className="text-[12px] sm:text-[14px] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum has been the industry's standard
              dummy text ever since the <br /> 1500s, when an unknown printer
              took a galley of type and scrambled it to <br /> make a type
              specimen book
            </p>
            <button className="w-[200px] sm:w-[240px] h-10 sm:h-12 px-2.5 py-3 bg-[#e30613] text-[white] flex justify-center text-[14px] sm:text-[16px] font-bold items-center">
              Savatga qo’shish
            </button>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-xl sm:text-2xl leading-[92%] tracking-[0.01em] text-black">
            Asosiy xususiyatlar:
          </h2>
          <div className="mt-[15px] sm:mt-[20px] flex flex-col gap-5 sm:gap-6">
            <p className="flex items-center gap-[15px] sm:gap-[20px] font-normal text-sm sm:text-base leading-[122%] tracking-[0.01em] text-black">
              <img src={img4} />
              Termik ruxsat: 160 x 120 (19200 piksel)
            </p>

            <p className="flex items-center gap-[15px] sm:gap-[20px] font-normal text-sm sm:text-base leading-[122%] tracking-[0.01em] text-black">
              <img src={img4} />
              Issiqlik sezuvchanligi: 40 mK (25 °C da, F#=1,0)
            </p>

            <p className="flex items-center gap-[15px] sm:gap-[20px] font-normal text-sm sm:text-base leading-[122%] tracking-[0.01em] text-black">
              <img src={img4} />
              Haroratni o'lchash diapazoni: -20°C dan 550°C (-4°F~1022°F)
            </p>

            <p className="flex items-center gap-[15px] sm:gap-[20px] font-normal text-sm sm:text-base leading-[122%] tracking-[0.01em] text-black">
              <img src={img4} />
              Aniqlik: 15°C va 35°C (59°F va 95°F) orasidagi muhit harorati va
              0°C (32°F) dan yuqori <br /> ob'ekt harorati uchun maksimal
              (±2°C/3,6°F, ±2%)
            </p>

            <p className="flex items-center gap-[15px] sm:gap-[20px] font-normal text-sm sm:text-base leading-[122%] tracking-[0.01em] text-black">
              <img src={img4} />
              Dastlabki oʻlchash sozlamalari: markaziy nuqta, issiq nuqta, sovuq
              nuqta, foydalanuvchi <br /> tomonidan belgilangan
              nuqta/chiziq/hudud
            </p>

            <p className="flex items-center gap-[15px] sm:gap-[20px] font-normal text-sm sm:text-base leading-[122%] tracking-[0.01em] text-black">
              <img src={img4} />
              Qo‘lda fokuslash
            </p>

            <p className="flex items-center gap-[15px] sm:gap-[20px] font-normal text-sm sm:text-base leading-[122%] tracking-[0.01em] text-black">
              <img src={img4} />
              Kadr tezligi 25 Gts
            </p>
            <p className="flex items-center gap-[15px] sm:gap-[20px] font-normal text-sm sm:text-base leading-[122%] tracking-[0.01em] text-black">
              <img src={img4} />
              3,5 dyuymli sensorli displeyli LCD displey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
