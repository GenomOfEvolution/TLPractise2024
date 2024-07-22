const string wordDelimetr = "\t";
const string filePath = "dict.txt";
const string commandExit = "exit";
const string commandAddTranslation = "add";
const string commandTranslate = "translate";

bool usingDictionary = true;
Dictionary<string, string> wordsDictionary = new();
wordsDictionary = LoadDictionaryFromFile( filePath );

Console.WriteLine( "Dictionary" );
PrintCommands();

while ( usingDictionary )
{
    Console.Write( "Введите команду: " );
    switch ( Console.ReadLine().Trim().ToLower() )
    {
        case commandExit:
            Console.WriteLine( "Завершаем работу и сохраняем словарь..." );
            usingDictionary = false;
            break;
        case commandAddTranslation:
            AddTranslation( wordsDictionary );
            break;
        case commandTranslate:
            TryTranslate( wordsDictionary );
            break;
        default:
            Console.WriteLine( "Неизвестная команда!" );
            PrintCommands();
            break;
    }
}
SaveDictionaryToFile( wordsDictionary );

Dictionary<string, string> LoadDictionaryFromFile( string filePath )
{
    Dictionary<string, string> dictionary = new();
    try
    {
        StreamReader sr = new StreamReader( filePath );
        string line;
        while ( ( line = sr.ReadLine() ) != null )
        {
            string[] words = line.Split( wordDelimetr );
            if ( ( words[ 0 ] != null ) && ( words[ 1 ] != null ) )
            {
                dictionary.Add( words[ 0 ], words[ 1 ] );
            }
        }
        sr.Close();
    }
    catch ( Exception e )
    {
        Console.WriteLine( $"Ошибка при работе с файлом: {e.Message}" );
    }
    return dictionary;
}

static string GetNotEmptyString( string paramName )
{
    Console.Write( $"Введите {paramName}: " );
    string str = Console.ReadLine();
    while ( string.IsNullOrWhiteSpace( str ) )
    {
        Console.WriteLine( "Поле не должно быть пустым, введите его еще раз" );
        str = Console.ReadLine();
    }
    return str;
}

void AddTranslation( Dictionary<string, string> dictionary )
{
    string word = GetNotEmptyString( "слово" );
    if ( dictionary.ContainsKey( word ) )
    {
        Console.WriteLine( $"Упс! Слово \"{word}\" уже есть в словаре!" );
        Console.WriteLine( $"Используйте команду \"{commandTranslate}\" чтобы увидеть его перевод" );
    }
    else
    {
        string translation = GetNotEmptyString( "перевод слова" );
        dictionary.Add( word, translation );
    }
}

void TryTranslate( Dictionary<string, string> d )
{
    const string positiveAnser = "y";
    string word = GetNotEmptyString( "слово" );
    if ( d.ContainsKey( word ) )
    {
        Console.WriteLine( $"Слово \"{word}\" переводится как \"{d[ word ]}\"" );
    }
    else
    {
        Console.Write( $"Слова \"{word}\" нет в словаре, хотите добавить перевод({positiveAnser}/n): " );
        if ( Console.ReadLine() == positiveAnser )
        {
            string translation = GetNotEmptyString( "перевод слова" );
            d.Add( word, translation );
        }
    }
}

void SaveDictionaryToFile( Dictionary<string, string> d )
{
    if ( File.Exists( filePath ) )
    {
        File.Delete( filePath );
    }

    StreamWriter sw = new StreamWriter( filePath );
    foreach ( var pair in d )
    {
        sw.WriteLine( $"{pair.Key}{wordDelimetr}{pair.Value}" );
    }
    sw.Close();
}

void PrintCommands()
{
    Console.WriteLine( $"{commandTranslate} - перевести слово" );
    Console.WriteLine( $"{commandAddTranslation} - добавить перевод" );
    Console.WriteLine( $"{commandExit} - выход" );
}