var fn = `ST_GeomFromText`;
var values = new Array( 1000 ).fill(null).map( ( val, index ) => {
   var id = index + 1;
   var lat = (90/1000) * id; // 0-90 deg latitude
   var long = (180/1000) * id; // 0-180 deg longitude
 
   return `('point_${ id }', ${fn}('POINT(${ lat.toFixed(5) } ${ long.toFixed(5) })', 4326))`;
} ).join(',\n\t');
console.log(`
  INSERT INTO \`locations_earth\`(\`name\`, \`position\`)
  VALUES
  ${ values };
`);