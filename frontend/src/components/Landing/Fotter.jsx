const FotterTerms = [
  "About",
  "Help Center",
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Accessibility",
  "Ads info",
  "Blog",
  "Status",
  "Careers",
  "Brand Resources",
  "Advertising",
  "Marketing",
  "Twitter for Business",
  "Developers",
  "Directory",
  "Settings",
  "© 2022 Twitter, Inc.",
];
 
export const Fotter = () => {
  return (
    <div className="footer">
      {FotterTerms.map((x) => (
        <p>{x}</p>
      ))}
    </div>
  );
};
