import sun from './sun.module.css'

export default function Sun(){
  return (
    <div className={sun.sunContainer}>
      <div class={sun.sun}></div>
      <div class={sun.ray}></div>
    </div>
  );
};

