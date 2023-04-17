
class ParentService {

    getEmployees() {
        return [
            { name: 'John', lastName: 'Doe', email: 'ss@ss.com' },
            { name: 'Johns', lastName: 'Does', email: 'ss@sss.com' },
            { name: 'Johnss', lastName: 'Doess', email: 'ss@ssss.com' },
        ];
    }
}

export default new ParentService()