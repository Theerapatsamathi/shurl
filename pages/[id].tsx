import { GetServerSideProps } from "next";
import { URLStore } from "../models/URLs";


const RedirectPage = () => <div></div>;

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {id} = context.query;

    const data = await URLStore.getByHashKey(id?.toString() || "")

    if(!data) return {
        redirect: {
            destination: "/404",
            permanent: false
        }
    }
    return {
        redirect: { 
        destination: data.url,
        permanent: false
        }
    }
}

export default RedirectPage;