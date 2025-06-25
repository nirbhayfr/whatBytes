import ClientProvider from "./ClientProvider";

async function page(props) {
     const params = await props.params;
     return <ClientProvider id={params.id} />;
}

export default page;
