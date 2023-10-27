import React, { useState } from "react";
import ReviewItem from "./ReviewItem";
import { clients } from "../../Utils/data";

export default function Reviews() {
  const [reviews, setReviews] = useState(clients());
  return (
    <div className="container mx-auto">
      <div className="mx-auto grid lg:grid-cols-6 grid-cols-3 p-6 gap-4 [&>:nth-child(even)]:mt-4">
        {
            reviews.map(item => <ReviewItem key={item.id} {...item} />)
        }
      </div>
    </div>
  );
}
