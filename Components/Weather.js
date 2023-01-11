import React from "react";
import Image from "next/image";

export default function Weather({ data }) {
  // console.log("data=>",data.weather.icon);
  // const icon = data.weather[0].icon;
  const celcius = (data.main.temp - 32)*0.5555;
  const Feels_like = (data.main.feels_like - 32)*0.5555;
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gay-300 z-10">
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <img
            src={
              "http://openweathermap.org/img/wn/" +
              data.weather[0].icon +
              "@4x.png"
            }
            width="100px"
            height="100px"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{celcius.toFixed(0)}&#176;</p>
      </div>
      <div className="bg-black/50 relative p-8 rounded-md ">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
        <div className="flex justify-between text-center ">
          <div>
            <p className="font-bold text-2xl">
              {Feels_like.toFixed(0)}&#176;
            </p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)} MPH
            </p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
