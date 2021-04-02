import CRUDService from "./CRUDService";

export default function Query({ query, onResponse, children }) {
  console.log("QUERY");
  const { read } = CRUDService();
  const sendQuery = async () => {
    const response = await read(query);
    onResponse(response);
  };
  sendQuery();
  return <div>{children}</div>;
}
