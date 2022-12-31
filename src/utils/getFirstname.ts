export function getFirstname(fullname: string): string {
  const unformattedFirstname = fullname?.split(" ")?.[0];
  const formattedFirstname = unformattedFirstname?.[0]?.toUpperCase() + unformattedFirstname?.substring(1);

  return formattedFirstname;
}