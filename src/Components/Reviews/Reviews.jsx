import React, { useState } from "react";
import ReviewItem from "./ReviewItem";
import { clients } from "../../Utils/data";

export default function Reviews() {
  const [reviews, setReviews] = useState(clients());
  return (
    <div className="container mx-auto">
      <div className="max-w-lg mx-auto p-4 flex flex-col lg:flex-row lg:max-w-4xl lg:p-6 gap-4 lg:[&>:nth-child(even)]:mt-4">
        {
            reviews.map(item => <ReviewItem {...item} />)
        }
      </div>
    </div>
  );
}
