// DESTRUCTURING {}

const TogglerComponent = ({
  toggle,
  toggler,
}: {
  toggler: any;
  toggle: boolean;
}) => {
  const renderStyles: Record<
    "true" | "false",
    {
      background: string;
      color: string;
      padding: number;
    }
  > = {
    true: {
      background: "red",
      color: "white",
      padding: 100,
    },

    false: {
      background: "white",
      color: "black",
      padding: 100,
    },
  };

  return (
    <div
      style={renderStyles[`${toggle}`]}
      onClick={() => toggler((p: boolean) => !p)}
    >
      TogglerComponent
    </div>
  );
};

export default TogglerComponent;
