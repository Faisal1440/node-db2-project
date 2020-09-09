
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments("id")
        tbl.string("VIN")
          .notNullable (
              
          )
          .unique(
  
          )
        tbl.string("make")
        .notNullable (
              
          )
        tbl.string("model")
          .notNullable (
                
            )
        tbl.string("milage")
        .notNullable (
              
          )
        tbl.string("status")
        tbl.string("transmission")
    }) 
  };
  
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars" )
  };