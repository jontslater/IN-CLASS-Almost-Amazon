import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthors = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
   </div>
     <p>${obj.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
       $${obj.first_name}` : `$${obj.price}`}</p>      
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewAuthors;
