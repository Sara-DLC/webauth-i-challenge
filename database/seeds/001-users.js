
exports.seed = function(knex) {
      return knex('users').insert([
        { username: "harry", password: 'potter'},
        { username: "hermione", password: 'granger'},
        { username: "ron", password: 'wesley'}
      ]);
};
