const HeaderTitle = ({ title, paragraph }) => {
  return (
    // Return a row, expects a .container as a parent
    <header className="row text-center mb-3">
      <h1 className="my-3">{title}</h1>
      <p className="text-muted">{paragraph}</p>
    </header>
  );
}

export default HeaderTitle;