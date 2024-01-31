function ImageSlide() {
  const styleSheet = `
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none; 
      scrollbar-width: none; 
      overflow-x: auto;
    }
  `;

  return (
    <>
      <style>{styleSheet}</style>
      <div className="relative w-full flex gap-4 py-6-0 hide-scrollbar">
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://s3-alpha-sig.figma.com/img/2438/62e6/926e116640ee6b332250c62e0bed2894?Expires=1704672000&Signature=m-vRF5r9Kjwh7nHWEmi4EU~d8KwmhNFBG5KgUKRDd~FBq2y6Lt6vmOqnNFOkDjfSlEQe7l19r7ikYbykVjRwogLC9lJ~KH3rwA5WH~fifK0mP4THnk4vgLm~6h6Jcrr4jsMxC8VUp7t4sVyCLvj6TXaRNQiFxA1shgLXX2FQZclAsBBlxXwa1swrFQzF1hnIDfGmgenFoGsJkwbz2CkTFjoW3v-el2G8JPXp4N7eY70jMtpTaXOqI7oJEQc6MxGIf7cGANnWGHTHQY24xeQlrgT0ycz4Ed2tqd09J25bvod4iYmavieuc4h7E6p3QKxOHJKorMC4xtdbq1X639czAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Image 1"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://s3-alpha-sig.figma.com/img/9731/266b/0e6b1539332b0d0b872c05ca560e6853?Expires=1704672000&Signature=pbnE12DvRWfLL8d8xsIYFuenySAKZNFcJXKH~WrNJfgpKtRYwHtyP7GDZ0zoC7K8j0HvO0Fxj92ufLPc07je6XE5RYXuffs75SnBg2qrsmF8e1BlgGHHlJi3J4Z9Q9zKOIrirAC4wcQgKf2mg0r1bwdIJUw2b4dcg454hLQrGTd6Uz~NMMw3T-75Sbrw-QY0lkvb4yteVvCPgw6leRGKr7Lf9lD3NouhdFruiTa4KaGCkdcOSz85ZYvNFyW1zVzlw854umMzLftG8FWRB~TYxjw4cECcuppMGDwjBdSmaxbDecqivdenYiyGh-zsCPgY~lesief1wnrPXYlBX4Ee8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Image 2"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://s3-alpha-sig.figma.com/img/1098/0e73/b8a0c489adf285dd0c7ea3441805c70d?Expires=1704672000&Signature=iDxV78MvhJL241KHr~TnENKZ~ZoUOe-CbIYZPqafx7LvtBanOhTeJDxFsA63DDVZiOBUofYfJwDt27Kk6w3Gq6fh7ytq4A~Ay6QqvV5iJ1-KuWddGCMX2uEtz-69ypx6udTJx1cgrRySd6RJk2EOaBroE660y8s2v62ZsPkOWLse4mPlbwm9xom1CU4ysO~IbBdJYPZvA~zLqAcRgA-2YRsLbkB2fTeCmE-pyWd7W2QTGBuMyiZ1kT~gWJpGl58I8d2ffV1E~roQhKE~lGNAuUi~Pp1j5~cwXBnS8iAxiuS2jkfexfTAdzVIAdSLGZ0Cwm50PdPSuQt-QxfhP-ThKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Image 3"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://s3-alpha-sig.figma.com/img/7071/2aad/8154c4f72cddf1fcf7f431091f08a30c?Expires=1704672000&Signature=SgavIrSETUUzcxsRTwLEdvnWN2XOUkAaIYkesZKP3fx7ebV7o161Ebq~v7blsvB-vn2gOHOYESAqzKIAxVBdwdxOmaEzI5CVRqZpu2Q74g9sPtq3ctrTmRnGSeJoP83Q93p1gO-Kv1zH7mrSNjt916UZR~yRswfI~y--dOehjEcOsjpXFIrVNWhzvrUvx470YVwzgafE--NkBVc-SG56LVQMwSaTFqC7fwVkoH2veu8bx716gd625T7kRTG~L6tonL-3AOoUqBRAkR1gq6u4VGJ5dirAGyHNdoviVgc39zyBtUptq1B7BU2l6lE89dI8ULt8YEr-I53WLfF0ixlWuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Image 4"
        />
        <img
          className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://s3-alpha-sig.figma.com/img/bc3c/a273/83db0a289f0504457e532bb4fc23a2a6?Expires=1704672000&Signature=hI1VdOafdT0vP96b2yE7sTkoC619GqWU0alLLtkBtVOJzGYIf9gXR-q3yrvTV0pFjF17DPJx~5GokStfEjLOUCSsCkZLr6yNu7NbxpGkAZtBrj6gribc3~TgZQYfZ66A3rKp2TgToWZI467e1BnXsqwI-ofhwvlFBNF-OTySBPJ3LaDo2rOAJ4oSRLEyTl77IR3OYzuxYeWq4jc5sdtUs2baIOoaInOXfSJtI7pGc9xBML-1eSxvYd6T1kmyvVHjauLnpqyfVZvyNFqScFbDHvUT0Je95XY2Fz7htKhmF3fc2yoUR2eq-aFkdwy3PCVMRRfn4sZGeshnBxd42z3MIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Image 5"
        />
      </div>
    </>
  );
}

export default ImageSlide;
