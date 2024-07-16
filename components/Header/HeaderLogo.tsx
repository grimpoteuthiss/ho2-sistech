import TypeIt from "typeit-react";

function HeaderLogo () {
  return (
      <TypeIt
      className="text-yellow"
       options={{
        
        speed: 100,
        waitUntilVisible: true,
      }}
        getBeforeInit={(instance) => {
        instance.type("codeqest", { delay: 300 })
        .move(-3)
        .delete(1)
        .type("Qu", { delay: 300 })
        .move(-5)
        .delete(1)
        .type("C")
        .move(null, { to: "END" })
        .type("!");

    return instance;
  }}/>);
}

export default HeaderLogo;
