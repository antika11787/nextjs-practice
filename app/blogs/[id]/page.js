export default function Blog({ params }) {
  const { id } = params;

  return (
    <div>
        <li>Blog id is: {id}</li>
    </div>
  );
}
