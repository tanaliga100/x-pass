/* eslint-disable react/no-unescaped-entities */
import { TfiWrite } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openAddPost } from "../../store/features/uiSlice";

const AddPost = () => {
  const dispatch = useDispatch();

  return (
    <main className="flex flex-col gap-5">
      <Post>
        <button
          type="button"
          className="p-5 font-bold w-full rounded-lg border-x-2 hover:border-emerald-300 flex flex-row gap-4 items-center z-10 bg-transparent text-emerald-500 inset-1"
          onClick={() => dispatch(openAddPost())}
        >
          What's on your mind ? <TfiWrite size={25} />
        </button>
      </Post>
      <Content>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        laborum excepturi voluptates accusantium quia incidunt error quaerat
        doloremque aut? Delectus porro tempora in ea voluptas at ipsa
        consequatur ipsam voluptatem sed, dignissimos quia nisi! Voluptatibus
        reiciendis nobis, numquam ut adipisci odit fugit iure quos qui minus
        quas expedita repudiandae ipsam molestiae ad cumque nesciunt similique
        ipsum optio harum inventore. Ipsa quibusdam incidunt sunt architecto,
        accusantium et in neque dicta quam deleniti maxime, explicabo blanditiis
        iusto ex, dolore ea quas illo aliquid quasi. Repellendus perferendis
        distinctio quaerat illum odit expedita praesentium laborum quo
        laudantium. Quas maiores dolorem, beatae est deserunt, unde ut numquam
        vel laborum esse hic mollitia ab? Doloribus voluptatum culpa
        necessitatibus velit natus architecto nobis dolore nostrum! Commodi
        dolore veniam cum. Quibusdam, iusto commodi? Velit necessitatibus
        consectetur saepe doloribus commodi? Id quod facilis sed nulla nesciunt
        laudantium modi similique illo perferendis. Accusantium non laudantium
        numquam exercitationem natus, similique, vitae dolorem eveniet dolores
        reprehenderit ducimus quibusdam velit veritatis placeat corrupti impedit
        delectus? In architecto, iure provident veritatis minima quidem nemo eos
        autem, optio molestias at nesciunt assumenda error laboriosam
        consequatur aut qui suscipit, impedit ad tempore? Accusamus quisquam sed
        culpa laborum perferendis incidunt mollitia laudantium labore magni
        temporibus officia modi delectus fugiat nulla impedit suscipit autem
        minima placeat obcaecati fugit, error doloremque! Ipsa dignissimos culpa
        nemo amet deserunt! Molestiae optio numquam corporis, beatae autem
        nesciunt quod officiis voluptatibus eos harum, distinctio fuga rem
        corrupti recusandae magnam ipsam? Eveniet hic quisquam non, unde maiores
        qui id adipisci alias provident fugit incidunt earum quidem corrupti
        voluptates rerum illum dolores dignissimos accusantium labore. Vitae,
        id? Unde alias nam provident odit aliquid. Aperiam reiciendis non veniam
        debitis saepe commodi ducimus omnis sequi placeat reprehenderit, natus
        laudantium? Facere, nihil alias, voluptatem illum accusamus iste, odio
        est cumque esse culpa voluptatibus eligendi? Reiciendis cum voluptates
        veritatis quae placeat harum qui odit rem magni iure. Est, adipisci
        similique commodi harum veritatis, aliquid, nam doloribus voluptas
        labore qui numquam? Nam, fugit consequatur autem hic quo ut blanditiis
        inventore beatae alias, amet incidunt maiores quibusdam dolores minus
        architecto. Neque laudantium, facere dignissimos quae aspernatur labore
        quas aperiam maiores pariatur placeat corrupti. Cupiditate laboriosam ex
        corrupti praesentium, esse quas architecto, asperiores ab eos autem
        veniam omnis eveniet natus deserunt provident nobis optio quam inventore
        magnam maxime consectetur iusto fuga? Itaque obcaecati illo dolorem
        corrupti incidunt sunt, optio expedita corporis laudantium alias facere
        vero. Nisi id ipsam aliquid ipsum alias incidunt similique iste! Fuga
        aut voluptate quod perspiciatis aliquid saepe incidunt placeat quae
        dolorum esse, quos quaerat tempore ipsum facilis, assumenda quisquam,
        rerum praesentium dignissimos quis enim harum accusamus accusantium
        dolores? Quisquam, minus quaerat? Repellendus nihil officiis numquam
        laborum maxime cupiditate quas dolorum. Non minus dolores voluptatum eos
        deleniti vel saepe quam omnis? Quas culpa animi similique! Rerum facere
        natus aperiam reprehenderit velit beatae voluptatem odit autem
        perspiciatis voluptate! Veniam, quaerat eligendi velit id blanditiis
        iste sapiente repudiandae voluptates quasi saepe unde obcaecati magnam,
        voluptate nostrum. Obcaecati inventore quisquam eum debitis soluta odit
        recusandae, excepturi voluptas, dignissimos natus beatae rerum
        asperiores eos officiis doloribus corporis ad. Reiciendis nostrum culpa
        maxime accusamus architecto quisquam hic est natus, fuga cum libero
        ipsum! Adipisci, itaque deleniti ipsum temporibus sequi corrupti
        distinctio porro aspernatur tempora eligendi modi recusandae. Qui rerum,
        dolor voluptas minima necessitatibus officia voluptate similique, error
        id maiores saepe laboriosam alias dicta vel iure. Odit laborum, itaque,
        error qui eaque repudiandae obcaecati voluptate commodi libero in harum
        enim. Deleniti suscipit quidem debitis tenetur vero nobis non
        praesentium officiis sequi ipsum numquam officia, ipsa laborum dolorum
        nostrum pariatur quaerat magni rerum exercitationem harum laboriosam
        quos id voluptatum. Distinctio numquam beatae quam fuga, voluptate,
        explicabo ipsam facilis quisquam laborum quas, temporibus eum aliquid
        mollitia incidunt vero. Ratione, explicabo? Aperiam in, tenetur ullam
        vitae officiis minus ex culpa laboriosam autem temporibus, ipsa corporis
        praesentium vel mollitia maiores deserunt, illo dolor quis qui adipisci
        molestias. Voluptates provident dolore, asperiores ipsum hic dignissimos
        nostrum nihil nam voluptatem praesentium cumque incidunt voluptas,
        assumenda dolor aliquid odio? Cumque est molestiae quam omnis suscipit
        voluptates? Eius, amet cupiditate velit eaque corrupti earum impedit
        delectus repudiandae autem ipsum porro, molestias maiores? Cupiditate,
        laborum molestiae sequi in ducimus maiores eligendi sunt architecto quae
        alias, aliquid soluta, vel rem accusamus tempora corporis quas neque.
      </Content>
    </main>
  );
};

export default AddPost;
const Post = styled.div``;
const Content = styled.div``;
