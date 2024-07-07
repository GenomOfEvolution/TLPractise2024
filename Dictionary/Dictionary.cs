const string wordDelimetr = "\t";
const string filePath = "dict.txt";
const string commandExit = "exit";
const string commandAddTranslation = "add";
const string commandTranslate = "translate";

bool usingDictionary = true;
Dictionary<string, string> wordsDictionary = new();
LoadDictionaryFromFile( ref wordsDictionary );

Console.WriteLine( "Dictionary" );
PrintCommands();

while ( usingDictionary )
{
    Console.Write( "Введите команду: " );
    switch ( Console.ReadLine() )
    {
        case commandExit:
            Console.WriteLine( "Завершаем работу и сохраняем словарь..." );
            usingDictionary = false;
            break;
        case commandAddTranslation:
            AddTranslation( ref wordsDictionary );
            break;
        case commandTranslate:
            TryTranslate( ref wordsDictionary );
            break;
        default:
            Console.WriteLine( "Неизвестная команда!" );
            PrintCommands();
            break;
    }
}
SaveDictionaryToFile( wordsDictionary );

void LoadDictionaryFromFile( ref Dictionary<string, string> d )
{
    try
    {
        StreamReader sr = new StreamReader( filePath );
        string line;
        while ( ( line = sr.ReadLine() ) != null )
        {
            string[] words = line.Split( wordDelimetr );
            if ( ( words[ 0 ] != null ) && ( words[ 1 ] != null ) )
            {
                d.Add( words[ 0 ], words[ 1 ] );
            }
        }
        sr.Close();
    }
    catch ( Exception e )
    {
        Console.WriteLine( $"Ошибка при работе с файлом: {e.Message}" );
    }
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

void AddTranslation( ref Dictionary<string, string> d )
{
    string word = GetNotEmptyString( "слово" );
    string translation = GetNotEmptyString( "перевод слова" );
    d.Add( word, translation );
}

void TryTranslate( ref Dictionary<string, string> d )
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