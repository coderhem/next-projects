import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <main className="">
        <div className="container">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus magni in hic, incidunt laboriosam expedita cumque iste dolores voluptatibus, minima illum natus voluptatum doloremque eaque rem. Expedita ex reiciendis amet.</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="container">
          <h1>This is Footer</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, nihil, accusantium debitis odit fugiat dicta officiis iste, alias quibusdam sit maiores animi vitae molestiae suscipit aliquam! Exercitationem molestiae fugiat ducimus?</p>
        </div>
      </footer>
    </div>
  );
}
