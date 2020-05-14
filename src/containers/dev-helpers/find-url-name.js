import PropTypes from 'prop-types'



export default function findUrlName(pathname = '/', dataLink) {
    //получение масиива из объектов link:{name,pathname} по pathname
    let currentHierarchyLinks = [];
    let currentPathNames = pathname.split('/'); //разделить на массив
    currentPathNames.shift();                   //удалить первый эл
    currentPathNames.pop();                     //удалить последний эл

    for (let link in dataLink) {
        if (dataLink[link].path) {
            let linkpath = dataLink[link].path.replace(/\//gi, ""); //удаление '/'
            let finded = currentPathNames.find((currentPathName) => currentPathName === linkpath); //поиск совпадения ссылок из url со всеми ссылками сайта(в большом проекте избыточно)
            if (finded) {
                currentHierarchyLinks.push(dataLink[link]);
            }
        }
    }
    //console.log('currentHierarchyLinks: ',currentHierarchyLinks)
    return currentHierarchyLinks;
}

findUrlName.propTypes = {
    pathname: PropTypes.string,
    dataLink: PropTypes.object
}