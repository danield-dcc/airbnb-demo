import React from "react";

function Footer() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 space-y-10 px-32
        py-14 bg-gray-100 text-gray-600"
    >
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Referals accepted</p>
        <p>Papafam</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Papa React</p>
        <p>Presentes</p>
        <p>Zero to Full Satck Hero</p>
        <p>Hundreds of Students</p>
        <p>Join Now</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Easter Eggs</p>
        <p>Say Hi YouTube</p>
        <p>For the win</p>
      </div>
    </div>
  );
}

export default Footer;
