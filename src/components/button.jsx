import React from "react";

export function Button({title, customClass}) {
    return(<>
    <button className={`bg-slate-200 py-2 rounded-full `+ customClass}>{title}</button>
    </>)
}