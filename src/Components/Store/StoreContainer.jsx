import React, {useState} from "react";
import StoreItem from "./StoreItem";
import { storeItems } from "../../Utils/data";
export default function StoreContainer() {
  const [items, setItems] = useState(storeItems())
  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(item => <StoreItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}
