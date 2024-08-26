import { CloudSVG } from "@/assets/svgs";
import "./cloud.css";
export default function Cloud({ scales }) {
  return (
    <>
      <div class="cloud" id="cloud-base"></div>
      <div class="cloud" id="cloud-back"></div>
      <div class="cloud" id="cloud-mid"></div>
      <div class="cloud" id="cloud-front"></div>
      <CloudSVG scales={scales} />
    </>
  );
}
