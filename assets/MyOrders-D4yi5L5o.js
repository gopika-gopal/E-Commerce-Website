import{r as i,j as e,L as r,a as h,_ as p}from"./index-CPpF5Fvr.js";var d={BASE_URL:"/E-Commerce-Website/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const x=()=>{const[t,o]=i.useState([]),[c,a]=i.useState(!1),l=async()=>{try{const s=localStorage.getItem("token");if(!s)throw new Error("Token not found");a(!0);const n=await h.get(`${d.VITE_SERVER}/api/v1/order/my`,{headers:{Authorization:`Bearer ${s}`}});o(n==null?void 0:n.data.orders),a(!1)}catch(s){console.log(s),p.error("Failed to fetch the orders")}};return i.useEffect(()=>{l()},[]),console.log(t),t.length===0?e.jsx("h1",{style:{padding:"20px",minHeight:"50vh",textAlign:"center"},children:"No Orders...."}):e.jsxs("div",{className:"orders-section",children:[e.jsx("h1",{className:"my-orders-heading",children:"My Orders"}),c?e.jsx(r,{}):t==null?void 0:t.map(s=>e.jsxs("div",{className:"order-card",children:[e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:s.orderItems.map(n=>e.jsx("h3",{children:n.name}))}),e.jsxs("p",{children:["Price - ₹",s==null?void 0:s.total]}),e.jsxs("p",{style:{fontWeight:"bold"},children:["Status: ",e.jsxs("span",{style:{color:"red"},children:[" ",s==null?void 0:s.status]})]}),e.jsxs("p",{children:["Shipping Address : ",s.shippingInfo.address,",",s.shippingInfo.city,",",s.shippingInfo.state,",",s.shippingInfo.country.toUpperCase(),",",s.shippingInfo.pinCode]})]},s==null?void 0:s._id))]})};export{x as default};
