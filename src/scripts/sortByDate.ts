function sortByDate(targetObject: any) {

    let itemsByDate: Record<string, any[]> = {};
    let currentItems: any[] = [];

    targetObject.forEach((item: any) => {

    const isCurr = (item.frontmatter.curr == "true");

    const year = String(project.frontmatter?.year);

    if (isCurr) { currentProjects.push(project); return}

    if (projectsByYears[year]) { projectsByYears[year].push(project); }

    else { projectsByYears[year] = [project]; }

});

}