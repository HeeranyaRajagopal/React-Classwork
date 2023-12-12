

import Classcom from "./Component/Classcom";
import Functionalcom from "./Component/Functionalcom";
import OneExport from "./Component/OneExport"; 
import ArrowProps from "./Day4/ArrowProps";
import DefaultProps from "./Day4/DefaultProps";
import DynamicRendering from "./Day4/DynamicRendering";
import Parent from "./Day4/ParentChildcom";
import PropsClass from "./Day4/PropsClass";
import PropsEx1 from "./Day4/PropsFuncEx1";
import PropsFunctional from "./Day4/PropsFunctional";
import StateClasscom from "./Day4/StateClasscom";
import StateFunction from "./Day4/StateFunction";
import StateHoldObject from "./Day4/StateHoldObject";
import TwowayBinding from "./Day4/TwoWayBinding";
export default function App()
{
  return (
    <div>
      <Functionalcom/>
      <Classcom/>
      <OneExport/>
      <PropsFunctional name='Heeranya'></PropsFunctional>
      <PropsClass college="SKCT"></PropsClass>
      <PropsEx1 college="SKCT" place="Cbe"></PropsEx1>
      <ArrowProps place="Bengaluru"></ArrowProps>
      <StateClasscom/>
      <StateFunction/>
      <StateHoldObject/>
      <Parent/>
      <DynamicRendering/>
      <TwowayBinding/>
      <DefaultProps/>
    </div>
  )
}