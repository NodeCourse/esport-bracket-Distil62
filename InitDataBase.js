const Sequelize = require('sequelize');

const db = new Sequelize('sql2238241', 'sql2238241', 'vY4*bY9!', {
    host : 'sql2.freemysqlhosting.net',
    dialect : 'mysql'
});
//DcUeicbr*2s*jU8v
//louis.charavner@ynov.com

const User = db.define('users', {
    username : { type: Sequelize.STRING },
    password : { type: Sequelize.STRING },
    icon : { type: Sequelize.STRING }
})

const Tournament = db.define('tournaments', {
    title : { type: Sequelize.STRING },
    icon : { type: Sequelize.STRING }
})

const Fight = db.define('fights', {
    score1 : { type: Sequelize.INTEGER },
    score2 : { type: Sequelize.STRING },
    dateOfFight : { type : Sequelize.DATE }
})

User.belongsToMany(Fight, {through : 'fights'});
User.belongsToMany(Tournament, {through : 'tournamentsParticipate'});
User.hasMany(Tournament, { as : 'tournamentsOwned' });

Tournament.hasMany(Fight, { as : 'fights' });

Fight.hasMany(User, { as : 'fighters' })
Fight.belongsTo(Tournament, { through : 'tournaments' });

db.sync();