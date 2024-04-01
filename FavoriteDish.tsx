import React, { useState } from "react";
import  style  from "./FavoriteDish.module.css";


export default function FavoriteDish(): JSX.Element {
  const [FavoriteDish, setFavoriteDish] = useState<string>("Конфигуратор любимого блюда: ");

  function handleAddShashlik(): void {
    setFavoriteDish(`${FavoriteDish} шашлычёк, `);
  }
  function handleAddOnion(): void {
    setFavoriteDish(`${FavoriteDish} маринованный лучёк, `);
  }
  function handleAddGreens(): void {
    setFavoriteDish(`${FavoriteDish} зелень,`);
  }
 
  function handleAddBread(): void {
    setFavoriteDish(`${FavoriteDish} тандырная лепёшка,`);
  }
  function handleAddSauce(): void {
    setFavoriteDish(`${FavoriteDish} соус`);
  }
  function handlAddClear(): void{
    setFavoriteDish('Любимое блюдо:');
  }


  return (
    <div className={style.container}>
      <h2>Favorite Dish</h2>
      <img src="https://gas-kvas.com/grafic/uploads/posts/2023-10/1696541446_gas-kvas-com-p-kartinki-shashlik-3.jpg" alt="Шашлык" width="400" />
      <p>{FavoriteDish}</p>
      <div className={style.btnContainer}>
        <button type="button" className={style.btn} onClick={handleAddShashlik}>
          добавить шашлыка
        </button>
        <button type="button" className={style.btn} onClick={handleAddOnion}>
          добавить лучка
        </button>
        <button type="button" className={style.btn} onClick={handleAddGreens}>
          добавить зелени
        </button>
        <button type="button" className={style.btn} onClick={handleAddBread}>
          добавить лепёшку
        </button>
        <button type="button" className={style.btn} onClick={handleAddSauce}>
          добавить соус
        </button>
        <button type="button" className={style.btn} onClick={handlAddClear}>
          Reset
        </button>

      </div>
    </div>
  );
}