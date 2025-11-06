import { BidCard } from "../BidCard";

export default function BidCardExample() {
  return (
    <div className="space-y-4 p-6 max-w-2xl">
      <BidCard
        id="1"
        bidderName="Neha Sharma"
        bidderRating={4.8}
        amount={750}
        message="I have 3 years of UI/UX design experience. I can deliver high-quality mockups within 2 days."
        status="pending"
        canAccept={true}
        onAccept={() => console.log("Accept bid")}
      />
      <BidCard
        id="2"
        bidderName="Rahul Verma"
        bidderRating={4.5}
        amount={600}
        message="I'm a graphic design student and would love to help with this project."
        status="pending"
        canAccept={true}
        onAccept={() => console.log("Accept bid")}
      />
      <BidCard
        id="3"
        bidderName="Kavya Iyer"
        bidderRating={4.9}
        amount={850}
        message="Professional designer with portfolio. Can start immediately."
        status="accepted"
        canAccept={false}
      />
    </div>
  );
}
