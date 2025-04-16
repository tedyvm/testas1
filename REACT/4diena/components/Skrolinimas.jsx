const Skrolinimas = () => {
  const scrollPosition = (event) => {
    const scrollY = event.target.scrollTop;
    console.log(scrollY);
    document.getElementById("pozicija").innerHTML = "Skrolinimo pozicija: " + scrollY;
    if (scrollY > 500) {
      document.getElementById("pozicija").innerHTML = "Tu jau per toli";
    }
    const procentai = (scrollY / event.target.scrollHeight) * 100;
    document.getElementById("progresBar").style.width = `${procentai}%`;
  };
  return (
    <div>
      <h2>Skrolinimas</h2>
      <p id="pozicija"></p>
      <div id="progresBar" style={{ width: 0, height: `20px`, background: `red` }}></div>
      <p onScroll={scrollPosition} id="scrolinimas">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore tempore ipsam, officiis tenetur impedit. Nemo non magnam
        quisquam sed eaque fugit libero repellendus commodi consequuntur! Adipisci quos dolor fuga aliquam aperiam. Quam earum impedit et mollitia
        labore illo minus, error cupiditate eveniet adipisci maxime est tenetur delectus quod doloremque dolorum, numquam incidunt recusandae. Unde
        eum repudiandae accusamus, incidunt obcaecati aperiam? Ducimus sequi doloribus rerum nemo maxime id eveniet minima vero est delectus sed
        explicabo voluptatum cupiditate, voluptas ipsa ullam maiores odit. Ducimus recusandae, itaque possimus qui, reiciendis saepe, soluta et vero
        ipsum alias unde doloribus? Perferendis pariatur cum dolor sequi? Facilis ad corporis recusandae voluptas commodi, nihil, ducimus alias
        tempore suscipit perferendis deserunt, repudiandae consequuntur a velit quis magnam! Consequatur autem, minus nulla impedit reiciendis,
        dolorum doloribus quo aliquid nisi nam animi debitis voluptatibus unde delectus temporibus similique consectetur perferendis, recusandae
        numquam laboriosam nesciunt harum? Voluptas vel voluptate ullam quod soluta placeat, nulla magnam officiis eum corrupti et harum minima alias
        molestiae est fuga assumenda non odit quis, adipisci nesciunt repellendus nam, expedita explicabo! Voluptatem veniam, vel itaque delectus
        voluptatibus hic incidunt nostrum porro facilis? Culpa quas quae eos odio dolores qui modi libero nesciunt ex esse? Nisi doloremque mollitia
        accusamus sint, placeat tempora dolor et eum beatae aliquam consectetur. Magnam dolores magni fuga laudantium, eius ipsum in explicabo
        delectus consequatur a blanditiis optio adipisci unde error illo ut, iste maxime eaque obcaecati impedit possimus sunt! Pariatur impedit
        quibusdam labore cum magnam? Eaque temporibus commodi enim cupiditate quia quo eius animi, beatae corporis rerum accusantium maiores aperiam
        explicabo eveniet nulla ipsa! Vitae molestias soluta enim. Illum optio iure, magni voluptas voluptatum accusantium sed dolore minima tempore
        similique nisi necessitatibus? Voluptatibus, nulla vero laudantium aut esse voluptas deleniti dolore maiores? Velit deserunt delectus, id
        nostrum amet sed voluptatem tenetur eum rem eos impedit est similique. Dolore labore, sit maxime, amet dolor rem unde accusamus ullam
        cupiditate recusandae facere, enim sint eveniet eius repellat voluptates? Praesentium voluptatum eius vel sint? Tempore, impedit nesciunt. Sed
        dolorum corrupti nam accusantium. Quisquam nihil quae odit quo recusandae est, dolorem expedita enim, eaque quidem sunt fuga eius at nostrum
        odio, voluptatum aspernatur voluptatibus tempora sed corporis aliquid? Assumenda eligendi asperiores accusamus dolores qui laborum quaerat
        dolorem voluptates et quod pariatur, doloribus natus neque dolorum sint? Commodi quibusdam hic architecto veritatis numquam maxime molestiae
        eveniet sint mollitia quos dolores accusamus fugiat placeat quisquam quis ex odit voluptatibus dignissimos suscipit praesentium dolorum
        explicabo, amet iusto. Quisquam ab suscipit odit doloribus molestias rerum itaque quasi fugiat nam, sed illum rem labore doloremque? Ipsum sed
        officiis molestias omnis eius quas id maiores repellendus nam atque sint, laudantium nulla amet velit consectetur nihil hic, minus distinctio
        nesciunt ex rerum tenetur vel cupiditate placeat. Suscipit est tenetur consequatur repellat esse quas, magni quam cum consectetur voluptas ut
        ab iusto cupiditate aspernatur, maxime nemo exercitationem commodi voluptates perferendis? Eveniet labore, commodi hic ex vitae sed earum rem
        dolores laudantium praesentium repellendus eius unde error facilis. Quae vero eius quaerat odit dolores id fugiat enim repellendus debitis,
        impedit amet hic soluta ea tenetur nam in ratione ipsam quos libero ab mollitia est. Quos veritatis est, ipsam in aspernatur perferendis?
        Molestiae rem voluptates et impedit esse perspiciatis repellat, sunt quos harum nisi similique ducimus porro quae. Dolores, placeat quis ipsum
        molestiae beatae facere dolorum tenetur commodi! Aperiam illo nesciunt ullam nulla beatae ducimus. Necessitatibus, voluptatem? Iusto, libero
        voluptatum? Deserunt, nisi! Inventore neque, id ducimus a magnam distinctio nostrum iusto ratione, rem animi dolor cupiditate modi soluta
        eveniet excepturi maxime rerum tempora perspiciatis ipsa enim dolorum nobis. Ratione aperiam, modi eos tenetur laboriosam et eaque rem
        voluptates in incidunt dolorum tempora asperiores quas. Repudiandae dolores quibusdam quidem. Distinctio eius quis laudantium excepturi vero
        porro iste praesentium ducimus inventore magnam laborum id amet, atque nam voluptatum exercitationem sed. Magni repellat possimus aut
        perferendis esse adipisci consectetur sunt animi quaerat quod aliquid cupiditate sit dolores nostrum, voluptatum iure ab harum. Minus qui
        nobis reiciendis ad. Nihil ratione porro, corporis provident expedita aperiam est aliquid a, hic delectus dignissimos cupiditate facere
        dolorem incidunt qui sint sequi exercitationem. Quas est illum architecto delectus. Doloremque nobis consequatur harum soluta ad vel adipisci
        pariatur distinctio, exercitationem esse voluptate ut officia quae quibusdam unde quis repudiandae nihil? Eligendi similique nisi molestias
        corrupti mollitia necessitatibus neque earum cumque libero et ad vero, dolor, magnam quod harum. Totam ipsum cumque repellendus dolor itaque
        eos at? Voluptatibus assumenda corrupti a quasi voluptates rerum aliquid qui consequuntur aperiam vitae hic mollitia tempore eos, voluptatem
        molestias, veniam dignissimos quidem minima voluptatum aliquam magnam quas. Quo doloremque labore recusandae, enim dignissimos dolorum aliquam
        commodi nobis vitae eius harum numquam sed qui tempore sapiente excepturi, ut esse illum minima repudiandae quidem, quam libero. Perspiciatis
        nesciunt ut iusto, consectetur asperiores perferendis enim aperiam suscipit nulla dolorem. Excepturi enim iste fugit voluptate quam vero
        cupiditate dolorum sed dicta magni placeat repellat tempore delectus libero unde optio asperiores eveniet distinctio natus laudantium, nulla
        voluptatem sequi quaerat. Enim quae aperiam incidunt repudiandae suscipit delectus deserunt magnam numquam magni tenetur assumenda odio sint,
        placeat adipisci excepturi repellat ab aspernatur quidem dolores, debitis et blanditiis eius? Tempore, aut architecto. Reprehenderit
        architecto rem quae amet recusandae, officiis consequatur ducimus quos itaque veniam ex sint quia est sapiente laudantium nesciunt
        voluptatibus earum sunt labore saepe unde rerum eum minus sit. Sapiente maiores voluptatum doloremque exercitationem voluptatem ullam soluta
        ex pariatur consequuntur obcaecati quaerat porro doloribus, suscipit ea, reprehenderit autem corrupti saepe laborum! Dolorum, officia
        necessitatibus voluptates ratione eum neque inventore magnam earum nemo suscipit maxime numquam natus esse. Cum assumenda molestias aperiam,
        nisi optio explicabo ullam, necessitatibus rem doloremque soluta dolore beatae? Vero nam magnam qui facilis pariatur ab consequatur nisi quia
        fugiat consectetur. Non ratione debitis, iusto voluptas exercitationem repellendus dolorum. Illo, hic quis non unde nesciunt, incidunt cumque
        dignissimos, eum ab obcaecati sequi consequuntur. Nobis obcaecati inventore debitis, sequi, beatae necessitatibus aliquid eveniet quis tenetur
        qui praesentium hic suscipit. Repellat, eaque. A dolore consectetur assumenda dolores laboriosam repellat placeat temporibus error optio,
        perferendis maxime iste!
      </p>
    </div>
  );
};

export default Skrolinimas;
