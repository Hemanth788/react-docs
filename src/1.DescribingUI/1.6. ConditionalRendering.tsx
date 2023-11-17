export default function ConditionalRendering({
  conditionallyReturn,
  conditionallyReturnNothing,
  conditionallyIncludeJSX,
  conditionallyAssignToAVariable,
}: {
  conditionallyReturn: boolean;
  conditionallyReturnNothing: boolean;
  conditionallyIncludeJSX: boolean;
  conditionallyAssignToAVariable: boolean;
}) {
  if (conditionallyReturnNothing) return null;
  if (conditionallyReturn) return <p>Conditionally return JSX</p>;

  let conditionalJSXVar = null;
  if (conditionallyAssignToAVariable)
    conditionalJSXVar = (
      <p>
        this sentence is condtionally assigned to a var which is being rendered
      </p>
    );

  return (
    <>
      <p>
        Conditional Rendering:
        {conditionallyIncludeJSX
          ? " this string is included conditionally using ternary"
          : null}{" "}
      </p>
      {conditionallyIncludeJSX && (
        <p>this string is included conditionally using logical AND: && </p>
      )}
      {conditionalJSXVar}
    </>
  );
}
